const postcssPresetEnv  = require('postcss-preset-env')
const postcssImport     = require('postcss-import')
const cssnano           = require('cssnano')
const combineSelectors  = require('postcss-combine-duplicated-selectors')

const lib = process.env.npm_lifecycle_event

const inlineMediaQueries = lib === 'lib:media' || lib === 'lib:supports'
// todo: inline MQs for 'lib:all' when it's supported better

module.exports = {
  plugins: [
    postcssImport(),
    postcssPresetEnv({
      stage: 0,
      autoprefixer: false,
      enableClientSidePolyfills: false,
      features: {
        'cascade-layers': false,
        'color-functional-notation': false,
        'custom-media-queries': {preserve:inlineMediaQueries},
        'custom-properties': false,
        'gap-properties': false,
        'logical-properties-and-values': false, 
        'not-pseudo-class': false,
        'place-properties': false,
      }
    }),
    combineSelectors(),
    cssnano({
      preset: 'default'
    }),
  ]
}
