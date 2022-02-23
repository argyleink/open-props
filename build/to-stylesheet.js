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

    if (prefix && prefix !== "''")
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
  :where(html) {
    --shadow-strength: 25%;
    --shadow-color: 220 40% 2%;
  }
}`
  }

  if (filename.includes('animations')) {
    appendedMeta += `
@media (--motionOK) {
  :where(html) {
    --scale-duration: .5s;
    --slide-duration: .5s;
    --shake-duration: .75s;
    --spin-duration: 2s;
    --ping-duration: 5s;
    --blink-duration: 1s;
    --float-duration: 3s;
    --bounce-duration: 2s;
    --pulse-duration: 2s;
  }
}`
  }

  file.write('}\n')
  file.end(appendedMeta)
}