import fs from 'fs'

import Animations from './props.animations.js'
import Sizes from './props.sizes.js'
import Colors from './props.colors.js'
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

const workload = {
  'props.fonts.css': Fonts,
  'props.sizes.css': Sizes,
  'props.easing.css': Easings,
  'props.zindex.css': Zindex,
  'props.shadows.css': Shadows,
  'props.aspects.css': Aspects,
  'props.colors.css': Colors,
  // 'props.svg.css': SVG,
  'props.gradients.css': Gradients,
  'props.animations.css': Animations,
  'props.borders.css': Borders,
}

const buildPropsStylesheet = ({filename, props}) => {
  const file = fs.createWriteStream(filename)
  file.write(`${selector} {\n`)

  let appendedMeta = ''
  if (filename.includes('shadows'))
    appendedMeta = `@media (--OSdark) {
  ${selector} {
    --shadow-strength: 25%;
    --shadow-color: 220 40% 2%;
  }
}`

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
Object.entries(workload).forEach(([filename, props]) => {
  buildPropsStylesheet({filename, props})
})

// gen index.css
const entry = fs.createWriteStream('index.css')
entry.write(`@import 'props.media.css';
@import 'props.supports.css';
`)
Object.keys(workload).forEach(filename => {
  entry.write(`@import '${filename}';\n`)
})
entry.end()