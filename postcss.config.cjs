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
        'logical-properties-and-values': false, 
        'prefers-color-scheme-query': false, 
        'gap-properties': false,
        'custom-properties': false,
        'place-properties': false,
        'not-pseudo-class': false,
        'focus-visible-pseudo-class': false,
        'focus-within-pseudo-class': false,
        'color-functional-notation': false,
        'custom-media-queries': {preserve:inlineMediaQueries},
        'double-position-gradients': false,
      }
    }),
    combineSelectors(),
    cssnano({
      preset: 'default'
    }),
  ]
}
