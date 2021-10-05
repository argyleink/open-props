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

// `node _create-props.js my-prefix``
const [prefix] = process.argv.slice(2)

const workload = {
  // 'props.animations.css': Animations,
  'props.colors.css': Colors,
  'props.sizes.css': Sizes,
  'props.fonts.css': Fonts,
  'props.borders.css': Borders,
  'props.aspects.css': Aspects,
  'props.easings.css': Easings,
  'props.gradients.css': Gradients,
  'props.shadows.css': Shadows,
}

const buildFile = ({filename, props}) => {
  const file = fs.createWriteStream(filename)

  file.write(':where(html) { \n')

  // todo: map keys and insert prefix

  Object.entries(props).forEach(([k,v]) => {
    // todo: handle when v is an array
    file.write(`  ${k}: ${v};\n`)
  })

  file.write('}\n')
  file.end()
}

// gen all files
Object.entries(workload).forEach(([filename, props]) => {
  buildFile({filename, props})
})

// todo: gen index.css from workload
