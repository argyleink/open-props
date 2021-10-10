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

const buildPropsStylesheet = ({filename, props}) => {
  const file = fs.createWriteStream(filename)

  let appendedMeta = ''
  if (filename.includes('shadows')) {
    file.write(`@import 'props.media.css';\n\n`)
    appendedMeta = `@media (--OSdark) {
  ${selector} {
    --shadow-strength: 25%;
    --shadow-color: 220 40% 2%;
  }
}`
  }
  file.write(`${selector} {\n`)

  Object.entries(props).forEach(([prop, val]) => {
    if (prefix)
      prop = `--${prefix}-` + prop.slice(2)
    
    if (Array.isArray(val)) {
      let [animation, keyframes] = val
      appendedMeta += keyframes
      val = animation
    }

    file.write(`  ${prop}: ${val};\n`)
  })

  file.write('}\n')
  file.end(appendedMeta)
}

// gen prop stylesheets
Object.entries({...mainbundle, ...individual_colors}).forEach(([filename, props]) => {
  buildPropsStylesheet({filename, props})
})

// gen index.css
const entry = fs.createWriteStream('index.css')
entry.write(`@import 'props.media.css';
@import 'props.supports.css';
`)
Object.keys(mainbundle).forEach(filename => {
  entry.write(`@import '${filename}';\n`)
})
entry.end()