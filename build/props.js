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

const [,,prefix='',useWhere,customSubject='',filePrefix=''] = process.argv

const subject = customSubject === '' ? 'html' : customSubject
const selector = useWhere === 'true' ? `:where(${subject})` : subject
const pfx = filePrefix ? filePrefix + '.' : ''

const mainbundle = {
  [`${pfx}props.fonts.css`]: Fonts,
  [`${pfx}props.sizes.css`]: Sizes,
  [`${pfx}props.easing.css`]: Easings,
  [`${pfx}props.zindex.css`]: Zindex,
  [`${pfx}props.shadows.css`]: Shadows,
  [`${pfx}props.aspects.css`]: Aspects,
  [`${pfx}props.colors.css`]: OpenColors.default,
  // [`${pfx}props.svg.css`]: SVG,
  [`${pfx}props.gradients.css`]: Gradients,
  [`${pfx}props.animations.css`]: Animations,
  [`${pfx}props.borders.css`]: Borders,
}

const individual_colors = {
  [`${pfx}props.gray.css`]: OpenColors.Gray,
  [`${pfx}props.red.css`]: OpenColors.Red,
  [`${pfx}props.pink.css`]: OpenColors.Pink,
  [`${pfx}props.grape.css`]: OpenColors.Grape,
  [`${pfx}props.violet.css`]: OpenColors.Violet,
  [`${pfx}props.indigo.css`]: OpenColors.Indigo,
  [`${pfx}props.blue.css`]: OpenColors.Blue,
  [`${pfx}props.cyan.css`]: OpenColors.Cyan,
  [`${pfx}props.teal.css`]: OpenColors.Teal,
  [`${pfx}props.green.css`]: OpenColors.Green,
  [`${pfx}props.lime.css`]: OpenColors.Lime,
  [`${pfx}props.yellow.css`]: OpenColors.Yellow,
  [`${pfx}props.orange.css`]: OpenColors.Orange,
}

const individual_colors_hsl = {
  [`${pfx}props.gray-hsl.css`]: ColorsHSL.Gray,
  [`${pfx}props.red-hsl.css`]: ColorsHSL.Red,
  [`${pfx}props.pink-hsl.css`]: ColorsHSL.Pink,
  [`${pfx}props.grape-hsl.css`]: ColorsHSL.Grape,
  [`${pfx}props.violet-hsl.css`]: ColorsHSL.Violet,
  [`${pfx}props.indigo-hsl.css`]: ColorsHSL.Indigo,
  [`${pfx}props.blue-hsl.css`]: ColorsHSL.Blue,
  [`${pfx}props.cyan-hsl.css`]: ColorsHSL.Cyan,
  [`${pfx}props.teal-hsl.css`]: ColorsHSL.Teal,
  [`${pfx}props.green-hsl.css`]: ColorsHSL.Green,
  [`${pfx}props.lime-hsl.css`]: ColorsHSL.Lime,
  [`${pfx}props.yellow-hsl.css`]: ColorsHSL.Yellow,
  [`${pfx}props.orange-hsl.css`]: ColorsHSL.Orange,
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
  filename: pfx + 'props.colors-hsl.css', 
  props: ColorsHSL.default}, 
  {selector, prefix}
)

// gen index.css
const entry = fs.createWriteStream(`../src/${pfx}index.css`)
entry.write(`@import 'props.media.css';
`)
Object.keys(mainbundle).forEach(filename => {
  entry.write(`@import '${filename}';\n`)
})
entry.end()