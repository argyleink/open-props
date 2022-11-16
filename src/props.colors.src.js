// Load `colar`
const colarURL =
  'https://raw.githubusercontent.com/fchristant/colar/master/colar/colar.json'
const colar = await (await fetch(colarURL)).json()

// Transform to required structure
const colors = Object.entries(
  colar.reduce((root, { name, color }) => {
    let [hueName, luminosityStep] = name.split('-')

    hueName = hueName.toLowerCase()
    luminosityStep = parseInt(luminosityStep)

    const hue = root?.[hueName] ?? {}

    return {
      ...root,
      [hueName]: { ...hue, [luminosityStep]: color.toLowerCase() },
    }
  }, {})
)


const Color = (await import('colorjs.io')).default

const hexTOhsl = hex =>
  new Color(hex).to('hsl')
    .coords.map(Math.round)
    .reduce((acc, coord, index) => {
      if (index > 0)
        return acc += ' ' + coord + '%'
      else
        return acc += coord
    }, '')

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

const groupedObject = colors.reduce((root, [color, shades]) => {
  let base = `--${color}-`
  root += `\n\nexport const ${capitalizeFirstLetter(color)} = {`

  Object.entries(shades).forEach(([num, hex]) => 
    root += `
  '${base}${num}-hsl': '${hexTOhsl(hex)}',`
  )

  root += '\n}'

  return root
}, ``)

const channels = colors.reduce((root, [color, shades]) => {
  let base = `--${color}-`

  Object.entries(shades).forEach(([num, hex]) => 
    root += `
    '${base}${num}-hsl': '${hexTOhsl(hex)}',`
  )

  return root
}, ``)

const vars = colors.reduce((root, [color, shades]) => {
  let base = `--${color}-`

  Object.entries(shades).forEach(([num, hex]) => 
    root += `
    '${base}${num}': ${hex};`
  )

  return root
}, ``)

console.log(groupedObject)
// console.log(vars)
// console.log(channels)