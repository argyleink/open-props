const postcssPresetEnv  = require('postcss-preset-env')
const postcssEasings    = require('postcss-easings')
const postcssImport     = require('postcss-import')
const cssnano           = require('cssnano')

module.exports = {
  plugins: [
    postcssEasings(),
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
        'custom-media-queries': {preserve:true}
      }
    }),
    cssnano({
      preset: 'default'
    }),
  ]
}
