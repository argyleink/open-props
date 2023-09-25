const postcssPresetEnv  = require('postcss-preset-env')
const postcssImport     = require('postcss-import')
const cssnano           = require('cssnano')
const combineSelectors  = require('./build/postcss-combine-selectors.cjs')

const lib = process.env.npm_lifecycle_event

const inlineMediaQueries = lib === 'lib:media' || lib === 'lib:supports'
// todo: inline MQs for 'lib:all' when it's supported better

module.exports = {
  plugins: [
    postcssImport(),
    postcssPresetEnv({
      stage: 0,
      autoprefixer: false,
      features: {
        'cascade-layers': false,
        'clamp': false,
        'color-functional-notation': false,
        'custom-media-queries': {preserve:inlineMediaQueries},
        'custom-properties': false,
        'double-position-gradients': false,
        'gap-properties': false,
        'is-pseudo-class': false,
        'logical-properties-and-values': false,
        'logical-resize': false,
        'logical-viewport-units': false,
        'not-pseudo-class': false,
        'place-properties': false,
        'prefers-color-scheme-query': false,
      }
    }),
    combineSelectors(),
    cssnano({
      preset: 'default'
    }),
  ]
}
