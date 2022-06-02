import fs from 'fs'

import Animations from '../src/props.animations.js'
import Sizes from '../src/props.sizes.js'
import * as OpenColors from '../src/props.colors.js'
import * as ColorsHSL from '../src/props.colors-hsl.js'
import Fonts from '../src/props.fonts.js'
import Borders from '../src/props.borders.js'
import Aspects from '../src/props.aspects.js'
import Easings from '../src/props.easing.js'
import Gradients from '../src/props.gradients.js'
import Shadows from '../src/props.shadows.js'
import SVG from '../src/props.svg.js'
import Zindex from '../src/props.zindex.js'

import {buildPropsStylesheet} from './to-stylesheet.js'
import {toTokens} from './to-tokens.js'
import {toFigmaTokens} from './to-figmatokens.js'

const [,,prefix='',useWhere] = process.argv

const selector = useWhere === 'true' ? ':where(html)' : 'html'

const mainbundle = {
  'props.fonts.css': Fonts,
  'props.sizes.css': Sizes,
  'props.easing.css': Easings,
  'props.zindex.css': Zindex,
  'props.shadows.css': Shadows,
  'props.aspects.css': Aspects,
  'props.colors.css': OpenColors.default,
  // 'props.svg.css': SVG,
  'props.gradients.css': Gradients,
  'props.animations.css': Animations,
  'props.borders.css': Borders,
}

const individual_colors = {
  'props.gray.css': OpenColors.Gray,
  'props.red.css': OpenColors.Red,
  'props.pink.css': OpenColors.Pink,
  'props.grape.css': OpenColors.Grape,
  'props.violet.css': OpenColors.Violet,
  'props.indigo.css': OpenColors.Indigo,
  'props.blue.css': OpenColors.Blue,
  'props.cyan.css': OpenColors.Cyan,
  'props.teal.css': OpenColors.Teal,
  'props.green.css': OpenColors.Green,
  'props.lime.css': OpenColors.Lime,
  'props.yellow.css': OpenColors.Yellow,
  'props.orange.css': OpenColors.Orange,
}

const individual_colors_hsl = {
  'props.gray-hsl.css': ColorsHSL.Gray,
  'props.red-hsl.css': ColorsHSL.Red,
  'props.pink-hsl.css': ColorsHSL.Pink,
  'props.grape-hsl.css': ColorsHSL.Grape,
  'props.violet-hsl.css': ColorsHSL.Violet,
  'props.indigo-hsl.css': ColorsHSL.Indigo,
  'props.blue-hsl.css': ColorsHSL.Blue,
  'props.cyan-hsl.css': ColorsHSL.Cyan,
  'props.teal-hsl.css': ColorsHSL.Teal,
  'props.green-hsl.css': ColorsHSL.Green,
  'props.lime-hsl.css': ColorsHSL.Lime,
  'props.yellow-hsl.css': ColorsHSL.Yellow,
  'props.orange-hsl.css': ColorsHSL.Orange,
}

// gen design tokens
const jsonbundle = Object.entries({
  ...Object.assign({}, ...Object.values(individual_colors)),
  ...Sizes,
  ...Easings,
  ...Zindex,
  ...Aspects,
  ...Gradients,
  ...Borders,
}).reverse()

const designtokens = toTokens(jsonbundle)
const JSONtokens = fs.createWriteStream('../open-props.tokens.json')
JSONtokens.end(JSON.stringify(Object.fromEntries(designtokens), null, 2))

// gen figma tokens
const figmatokens = toFigmaTokens(jsonbundle)
const FigmaTokens = fs.createWriteStream('../open-props.figma-tokens.json')
FigmaTokens.end(JSON.stringify(figmatokens, null, 2))

const figmatokensSYNC = { 'open-props': { ...figmatokens } }
const FigmaTokensSync = fs.createWriteStream('../open-props.figma-tokens.sync.json')
FigmaTokensSync.end(JSON.stringify(figmatokensSYNC, null, 2))

// gen prop variants
Object.entries({...mainbundle, ...individual_colors, ...individual_colors_hsl}).forEach(([filename, props]) => {
  buildPropsStylesheet({filename, props}, {selector, prefix})
})

// gen color hsl main file
buildPropsStylesheet({
  filename: 'props.colors-hsl.css', 
  props: ColorsHSL.default}, 
  {selector, prefix}
)

// gen index.css
const entry = fs.createWriteStream('../src/index.css')
entry.write(`@import 'props.media.css';
`)
Object.keys(mainbundle).forEach(filename => {
  entry.write(`@import '${filename}';\n`)
})
entry.end()