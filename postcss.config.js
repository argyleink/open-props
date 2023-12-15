import postcssPresetEnv from 'postcss-preset-env'
import postcssImport from 'postcss-import'
import cssnano from 'cssnano'
import combineSelectors from './build/postcss-combine-selectors.js'

const lib = process.env.npm_lifecycle_event

const inlineMediaQueries = lib === 'lib:media' || lib === 'lib:supports'
// todo: inline MQs for 'lib:all' when it's supported better

export default {
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
