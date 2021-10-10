import openColor from 'https://cdn.skypack.dev/open-color/open-color.js'

const colors = Object
  .entries(openColor.theme.colors)
  .filter(group => typeof group[1] === 'object')

const customizeIncrements = num =>
  num === '50'
    ? num.replaceAll('50', '0')
    : num.replaceAll('0', '')

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

const vars = colors.reduce((root, [color, shades]) => {
  let base = `--${color}-`
  root += `\n\nconst ${capitalizeFirstLetter(color)} = {`

  Object.entries(shades).forEach(([num, hex]) => 
    root += `
  '${base}${customizeIncrements(num)}': '${hex}',`
  )

  root += '\n}'

  return root
}, ``)

console.log(vars)