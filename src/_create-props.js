import fs from 'fs'

import Animations from './props.animations.js'
import Sizes from './props.sizes.js'
import * as OpenColors from './props.colors.js'
import Fonts from './props.fonts.js'
import Borders from './props.borders.js'
import Aspects from './props.aspects.js'
import Easings from './props.easing.js'
import Gradients from './props.gradients.js'
import Shadows from './props.shadows.js'
import SVG from './props.svg.js'
import Zindex from './props.zindex.js'

const [,,prefix,useWhere] = process.argv
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

const jsonbundle = {
  ...Object.values(individual_colors).reduce((colors, color) => {
    return Object.assign(colors, color)
  }, {}),
  ...Sizes,
  ...Easings,
  ...Zindex,
  ...Aspects,
  ...Gradients,
  ...Borders,
}
const designtokens = Object.entries(jsonbundle)
.filter(([key]) => key !== '*')
.map(([key, token]) => {
  let meta = {}

  let isLength = key.includes('size')
  let isEasing = key.includes('ease')
  let colors = ['gray','red','pink','grape','violet','indigo','blue','cyan','teal','green','lime','yellow','orange']
  let isColor = colors.some(color => key.includes(color))

  if      (isLength) meta.type = 'dimension'
  else if (isEasing) meta.type = 'cubic-bezier'
  else if (isColor)  meta.type = 'color'

  return [key, {
    value: token,
    ...meta,
  }]
})

const JSONtokens = fs.createWriteStream('../open-props.tokens.json')
JSONtokens.end(JSON.stringify(Object.fromEntries(designtokens), null, 2))

const figmatokens = {};

Object.entries(jsonbundle)
.filter(([key]) => key !== '*')
.map(([key, token]) => {
  let meta = {}

  let isLength = key.includes('size') && !key.includes('border-size')
  let isBorder = key.includes('border-size')
  let isRadius = key.includes('radius')
  let isShadow = key.includes('shadow')
  let colors = ['gray','red','pink','grape','violet','indigo','blue','cyan','teal','green','lime','yellow','orange']
  let isColor = colors.some(color => key.includes(color))
  
  if      (isLength) meta.type = 'sizing'
  else if (isBorder) meta.type = 'borderWidth'
  else if (isRadius) meta.type = 'borderRadius'
  else if (isShadow) meta.type = 'boxShadow'
  else if (isColor)  meta.type = 'color'
  else               meta.type = 'other'

  if (!(meta.type in figmatokens)) figmatokens[meta.type] = {}
  
  if (isColor) {
    let color = /--(.+?)-/.exec(key)[1]
    if (!(color in figmatokens[meta.type])) figmatokens[meta.type][color] = {}
    figmatokens[meta.type][color][key] = {
      value: token,
      ...meta,
    }
  } else {
    figmatokens[meta.type][key] = {
      value: token,
      ...meta,
    }
  }
})

const FigmaTokens = fs.createWriteStream('../open-props.figma-tokens.json')
FigmaTokens.end(JSON.stringify(figmatokens, null, 2))

const figmatokensSYNC = { 'open-props': { ...figmatokens } }

const FigmaTokensSync = fs.createWriteStream('../open-props.figma-tokens.sync.json')
FigmaTokensSync.end(JSON.stringify(figmatokensSYNC, null, 2))

const buildPropsStylesheet = ({filename, props}) => {
  const file = fs.createWriteStream(filename)

  let appendedMeta = ''

  if (filename.includes('shadows'))
    file.write(`@import 'props.media.css';\n\n`)

  file.write(`${selector} {\n`)

  Object.entries(props).forEach(([prop, val]) => {
    if (prop.includes('-@'))
      return

    if (prop === '*') {
      appendedMeta += Object.entries(val).reduce((list, [mixin, cssval]) => {
        return list += `\n  ${mixin}: ${cssval};`
      }, '\n* {')
      appendedMeta += '\n}\n'
      return
    }

    if (prefix)
      prop = `--${prefix}-` + prop.slice(2)
    
    if (prop.includes('animation')) {
      let keyframes = props[`${prop}-@`]
      appendedMeta += keyframes
    }

    file.write(`  ${prop}: ${val};\n`)
  })

  if (filename.includes('shadows')) {
    appendedMeta += `
@media (--OSdark) {
  * {
    --shadow-strength: 25%;
    --shadow-color: 220 40% 2%;
  }
}`
  }

  file.write('}\n')
  file.end(appendedMeta)
}

// gen prop variants
Object.entries({...mainbundle, ...individual_colors}).forEach(([filename, props]) => {
  buildPropsStylesheet({filename, props})
})

// gen index.css
const entry = fs.createWriteStream('index.css')
entry.write(`@import 'props.media.css';
`)
Object.keys(mainbundle).forEach(filename => {
  entry.write(`@import '${filename}';\n`)
})
entry.end()