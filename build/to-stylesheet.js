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
    --scale-easing: var(--ease-3);
    --slide-duration: .5s;
    --slide-easing: var(--ease-3);
    --shake-duration: .75s;
    --shake-easing: var(--ease-out-5);
    --spin-easing: linear;
    --ping-duration: 5s;
    --ping-easing: var(--ease-out-3);
    --blink-duration: 1s;
    --float-ease: var(--ease-out-3);
    --bounce-duration: 2s;
    --bounce-ease: var(--ease-squish-2);
    --pulse-duration: 2s;
    --pulse-ease: var(--ease-out-3);
  }
}`
  }

  file.write('}\n')
  file.end(appendedMeta)
}