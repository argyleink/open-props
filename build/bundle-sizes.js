import path from 'node:path';
import postcss from 'postcss';
import fs from 'node:fs/promises';
import pkg from '../postcss.config.cjs';
import { createRequire } from 'node:module';
import { sync as brotli } from 'brotli-size';
import { gzipSizeSync as gzip } from 'gzip-size';

// Comes in handy later when we run postcss
const { plugins } = pkg;

// @ts-ignore
const require = createRequire(import.meta.url);
const { scripts } = require('../package.json');
/** 
 * We build up an object with script:command pairs from package.json
 *
 * @type {Object.<string, string>}
 */
const filtered = Object.keys(scripts)
  .filter((key) => key.startsWith('lib:'))
  .reduce((obj, key) => {
    obj[key] = scripts[key];
    return obj;
  }, {});

/**
 * The regex captures a filepath and filename group from an npm command.
 * 
 * Captures for the command `postcss src/extra/normalize.light.css -o normalize.light.min.css` yields
 * { 
 *   groups: {
 *     filepath: 'src/extra/normalize.light.css',
 *     filename: 'normalize.light.min.css' 
 *   }
 * } 
 */
const regex = /postcss\s(?<filepath>\S+)\s\-[o]\s(?<filename>.*\.css)(?:.*$)/;

/**
 * @typedef {Object} Size
 * @property {number} raw - Unminified size in bytes
 * @property {string} size - Unminified size in KiB
 * @property {string} minified - Minified size in KiB
 * @property {string} brotli - Brotli compressed minified size in KiB
 * @property {string} gzip - Gzip compressed minified size in KiB
 */
 /** @type {Object.<string, Size>} sizes */
let sizes = {}

for (const [_, script] of Object.entries(filtered)) {
  const found = script.match(regex);

  if (!found) continue;

  /**
   * @typedef {object} CaptureGroup
   * @property {string} filepath
   * @property {string} filename
   */
  /** @type {CaptureGroup} */
  const { filepath, filename } = found.groups;

  /**
   * @type {import('postcss').ProcessOptions}
   */
  const options = { from: path.resolve(`../${filepath}`), to: undefined };
  const css = await fs.readFile(path.resolve(`../${filepath}`), 'utf-8');
  /**
   * Run the css through PostCSS (just like Open-Props).
   * plugins.slice(0, -1) remove `cssnano` plugin so we can get the size of the unminified code
   */
  const code = await postcss(plugins.slice(0, -1)).process(css, options);
  /**
   * This time we want to get the minified size.
   */
  const minified = await postcss(plugins).process(css, options);

  /**
   * Build the sizes object.
   * Strip `.min` from the filename
   */
  sizes[filename.replace('.min', '')] = {
    raw: code.css.length, // in bytes
    size: (code.css.length / 1024).toFixed(2), // in KiB
    minified: (minified.css.length / 1024).toFixed(2), // KiB
    brotli: (brotli(minified.css) / 1024).toFixed(2), // in KiB
    gzip: (gzip(minified.css) / 1024).toFixed(2), // in KiB
  }
}

await fs.writeFile('bundle-sizes.json', JSON.stringify(sizes, null, 2), { encoding: 'utf8' });
