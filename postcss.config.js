const postcssPresetEnv  = require('postcss-preset-env')
const postcssEasings    = require('postcss-easings')

module.exports = {
  plugins: [
    postcssEasings(),
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
      }
    }),
  ]
}
