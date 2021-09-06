const srcURL = 'https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json'
const gradients = await(await fetch(srcURL)).json()

const vars = gradients.reduce((root, {name, colors}) => {
  return root += `
  --gradient-${name.replaceAll(' ','-').toLowerCase()}: linear-gradient(${colors.join(',')})`
}, ``)

console.log(vars)