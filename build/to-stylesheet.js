import fs from 'fs'

export const buildPropsStylesheet = ({filename,props}, {selector,prefix}) => {
  const file = fs.createWriteStream("../src/" + filename)

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