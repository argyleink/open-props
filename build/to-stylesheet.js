import fs from 'fs'

export const buildPropsStylesheet = ({filename,props}, {selector,prefix}) => {
  const file = fs.createWriteStream("../src/" + filename)

  let appendedMeta = ''

  if (filename.includes('shadows') || filename.includes('animations')) {
    file.write(`@import 'props.media.css';\n\n`)
  }

  if (filename.includes('shadows')) {
    let dark_propsMeta = ``
    let dark_props = Object.entries(props)
      .filter(([prop, val]) =>
        prop.includes('-@media:dark'))

    dark_props.forEach(([prop, val], index) => {
      let v = props[prop]
      let extract = prop.slice(2, prop.length-('-@media:dark'.length))
      let p = prefix && prefix !== "''"
        ? `--${prefix}-` + extract
        : `--${extract}`

      dark_propsMeta += `    ${p}: ${val};${index !== dark_props.length-1 ? '\n' : ''}`
    })
    appendedMeta += `
@media (--OSdark) {
  ${selector} {
${dark_propsMeta}
  }
}`
  }

  file.write(`${selector} {\n`)

  Object.entries(props).forEach(([prop, val]) => {
    if (prop.includes('-@'))
      return

    if (prop.includes('animation')) {
      let keyframes = props[`${prop}-@`]
      appendedMeta += keyframes
    }

    if (prefix && prefix !== "''") {
      prop = `--${prefix}-` + prop.slice(2)
      if (typeof(val) == "string" &&  val.includes("var(--"))
        val = val.replace(/var\(--/g, `var(--${prefix}-`)
    }
    
    file.write(`  ${prop}: ${val};\n`)
  })

  if (filename.includes('animations')) {
    let dark_props = Object.entries(props)
      .filter(([prop, val]) =>
        prop.includes('-@media:dark'))

    dark_props.forEach(([prop, val], index) => {
      let hasDarkKeyframe = prop.endsWith('-@media:dark') && val.trim().startsWith('@keyframe')
      if (hasDarkKeyframe) {
        appendedMeta += `
@media (--OSdark) {
  ${val.trim().replace(/\n/g, '\n  ')}
}`
      }
    })
  }

  file.write('}\n')
  file.end(appendedMeta)
}