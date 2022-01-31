const openColor = (await import('https://cdn.skypack.dev/open-color/open-color.js')).default
const Color = (await import('https://colorjs.io/dist/color.esm.js')).default

const colors = Object
  .entries(openColor.theme.colors)
  .filter(group => typeof group[1] === 'object')

const customizeIncrements = num =>
  num === '50'
    ? num.replaceAll('50', '0')
    : num.replaceAll('0', '')

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
  ${base}${customizeIncrements(num)}-hsl: '${hexTOhsl(hex)}',`
  )

  root += '\n}'

  return root
}, ``)

const channels = colors.reduce((root, [color, shades]) => {
  let base = `--${color}-`

  Object.entries(shades).forEach(([num, hex]) => 
    root += `
    ${base}${customizeIncrements(num)}-hsl: '${hexTOhsl(hex)}',`
  )

  return root
}, ``)

const vars = colors.reduce((root, [color, shades]) => {
  let base = `--${color}-`

  Object.entries(shades).forEach(([num, hex]) => 
    root += `
    ${base}${customizeIncrements(num)}: ${hex};`
  )

  return root
}, ``)

console.log(groupedObject)
// console.log(vars)
// console.log(channels)