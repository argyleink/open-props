import fs from 'fs'

import Animations from '../src/props.animations.js'
import Sizes from '../src/props.sizes.js'
import * as Colors from '../src/props.colors.js'
import * as ColorsHSL from '../src/props.colors-hsl.js'
import ColorsOKLCH from '../src/props.colors-oklch.js'
import ColorsOKLCHgray from '../src/props.gray-oklch.js'
import ColorHues from '../src/props.colors-oklch-hues.js'
import Fonts from '../src/props.fonts.js'
import Borders from '../src/props.borders.js'
import Aspects from '../src/props.aspects.js'
import Easings from '../src/props.easing.js'
import Gradients from '../src/props.gradients.js'
import Shadows from '../src/props.shadows.js'
import SVG from '../src/props.svg.js'
import Zindex from '../src/props.zindex.js'
import MaskEdges from '../src/props.masks.edges.js'
import MaskCornerCuts from '../src/props.masks.corner-cuts.js'
import BrandColors from '../src/props.brand-colors.js'

import {buildPropsStylesheet} from './to-stylesheet.js'
import {toTokens} from './to-tokens.js'
import {toObject} from './to-object.js'
import {toFigmaTokens} from './to-figmatokens.js'
import {toStyleDictionary} from './to-style-dictionary.js'

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
  [`${pfx}props.colors.css`]: Colors.default,
  // [`${pfx}props.svg.css`]: SVG,
  [`${pfx}props.gradients.css`]: Gradients,
  [`${pfx}props.animations.css`]: Animations,
  [`${pfx}props.borders.css`]: Borders,
}

const individual_colors = Object.keys(Colors)
  .filter(exportName => exportName !== "default")
  .reduce((root, hueName) => ({
    ...root,
    [`${pfx}props.${hueName.toLowerCase()}.css`]: Colors[hueName]
  }), {})

const individual_colors_hsl = Object.keys(ColorsHSL)
  .filter(exportName => exportName !== "default")
  .reduce((root, hueName) => ({
    ...root,
    [`${pfx}props.${hueName.toLowerCase()}-hsl.css`]: ColorsHSL[hueName]
  }), {})

const individuals = {
  [`${pfx}props.masks.edges.css`]: MaskEdges,
  [`${pfx}props.masks.corner-cuts.css`]: MaskCornerCuts,
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

// gen style-dictionary tokens
const styledictionarytokens = toStyleDictionary(jsonbundle)
const StyleDictionaryTokens = fs.createWriteStream('../open-props.style-dictionary-tokens.json')
StyleDictionaryTokens.end(JSON.stringify(styledictionarytokens, null, 2))

// gen figma tokens
const figmatokens = toFigmaTokens(jsonbundle)
const FigmaTokens = fs.createWriteStream('../open-props.figma-tokens.json')
FigmaTokens.end(JSON.stringify(figmatokens, null, 2))

const figmatokensSYNC = { 'open-props': { ...figmatokens } }
const FigmaTokensSync = fs.createWriteStream('../open-props.figma-tokens.sync.json')
FigmaTokensSync.end(JSON.stringify(figmatokensSYNC, null, 2))

if (!fs.existsSync('../dist'))
  fs.mkdirSync('../dist')

const JS = fs.createWriteStream('../dist/open-props.js')
JS.end(`var OpenProps = ${JSON.stringify(toObject(), null, 2)}`)

const ES = fs.createWriteStream('../dist/open-props.module.js')
ES.end(`export default ${JSON.stringify(toObject(), null, 2)}`)

const CJS = fs.createWriteStream('../dist/open-props.cjs')
CJS.end(`module.exports = ${JSON.stringify(toObject(), null, 2)}`)

// const UMD = fs.createWriteStream('../dist/open-props.umd.js')
// UMD.end(`module.exports = ${JSON.stringify(toObject(), null, 2)}`)


// gen prop variants
Object.entries({
  ...mainbundle, 
  ...individual_colors, 
  ...individual_colors_hsl,
  ...individuals,
}).forEach(([filename, props]) => {
  buildPropsStylesheet({filename, props}, {selector, prefix})
})

// gen color hsl main file
buildPropsStylesheet({
  filename: pfx + 'props.colors-hsl.css', 
  props: ColorsHSL.default}, 
  {selector, prefix}
)

// gen color oklch files
buildPropsStylesheet({
  filename: pfx + 'props.colors-oklch.css', 
  props: ColorsOKLCH}, 
  {
    selector: useWhere === 'true' ? `:where(*)` : '*', 
    prefix
  }
)
buildPropsStylesheet({
  filename: pfx + 'props.gray-oklch.css', 
  props: ColorsOKLCHgray}, 
  {
    selector: useWhere === 'true' ? `:where(*)` : '*', 
    prefix
  }
)
buildPropsStylesheet({
  filename: pfx + 'props.colors-oklch-hues.css', 
  props: ColorHues}, 
  {selector, prefix}
)

buildPropsStylesheet(
  {filename: pfx + 'props.brand-colors.css', props: BrandColors},
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