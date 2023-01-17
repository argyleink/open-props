import Animations from './props.animations.js'
import Sizes from './props.sizes.js'
import Colors from './props.colors.js'
import ColorsHSL from './props.colors-hsl.js'
import Fonts from './props.fonts.js'
import Borders from './props.borders.js'
import Aspects from './props.aspects.js'
import Easings from './props.easing.js'
import Gradients from './props.gradients.js'
import Shadows from './props.shadows.js'
import SVG from './props.svg.js'
import Zindex from './props.zindex.js'
import MaskEdges from './props.masks.edges.js'
import MaskCornerCuts from './props.masks.corner-cuts.js'

const camelize = (text: string) => {
  text = text.replace(/[-]+(.)?/g, (_, c) => c 
    ? c.toUpperCase() 
    : '')
  return text.substr(0, 1).toLowerCase() + text.substr(1)
}

const mapToObjectNotation = <T>(props: T) => {
  for (var prop in props)
    props[camelize(prop)] = props[prop]
  return props
}

const OpenProps = mapToObjectNotation({
  ...Animations,
  ...Sizes,
  ...Colors,
  ...ColorsHSL,
  ...Fonts,
  ...Borders,
  ...Aspects,
  ...Easings,
  ...SVG,
  ...Gradients,
  ...Shadows,
  ...Zindex,
  ...MaskEdges,
  ...MaskCornerCuts,
})

export default OpenProps as OpenPropsModule

// --------------
// Fancy TS stuff

// adds camelized keys to the object
type OpenPropsModule = typeof OpenProps & {
  [Key in keyof typeof OpenProps as KebabCssVarsToCamel<Key>]: typeof OpenProps[Key];
}

// --foo-bar -> fooBar
type KebabCssVarsToCamel<Key extends string> = Key extends `--${infer Rest}`
	? KebabCssVarsToCamel<Rest>
	: Key extends `${infer FirstPart}-${infer FirstLetter}${infer LastPart}`
	? `${FirstPart}${Uppercase<FirstLetter>}${KebabCssVarsToCamel<LastPart>}`
	: Key;