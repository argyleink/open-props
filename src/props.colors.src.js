// Load `colar` and restructure
// Result: colar.[hueName].[luminosityStep] => hexCode
const colarURL =
  "https://raw.githubusercontent.com/fchristant/colar/master/colar/colar.json"
const colar = (await (await fetch(colarURL)).json()).reduce(
  (root, { name, color }) => {
    let [hueName, luminosityStep] = name.split("-")

    hueName = hueName.toLowerCase()
    luminosityStep = parseInt(luminosityStep)

    const hue = root?.[hueName] ?? {}

    return {
      ...root,
      [hueName]: { ...hue, [luminosityStep]: color.toLowerCase() },
    }
  },
  {}
)

// Load `open-color` and restructure
// Result: openColor.[hueName].[luminosityStep] => hexCode
const openColor = Object.entries(
  (await import("open-color/open-color.js")).default.theme.colors
)
  .filter((group) => typeof group[1] === "object")
  .reduce(
    (root, [hueName, luminosityStepsObject]) => ({
      ...root,
      [hueName]: Object.fromEntries(
        Object.entries(luminosityStepsObject).map(([step, color]) => [
          step.replace("00", "").replace("50", "0"),
          color,
        ])
      ),
    }),
    {}
  )

// Combine `open-color` and `colar` palettes
const colors = Object.entries({
  // Extend `openColor.gray`
  gray: {
    ...openColor.gray,
    10: "#16191d",
    11: "#0d0f12",
    12: "#030507",
  },
  // Use `colar.gray` as "stone"
  stone: colar.gray,
  // Use all other colors in `colar`
  ...Object.fromEntries(
    Object.entries(colar).filter(([hueName]) => hueName != "gray")
  ),
})


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
  string.charAt(0).toUpperCase() + string.slice(1)

const groupedObject = colors.reduce((root, [color, shades]) => {
  let base = `--${color}-`
  root += `\n\nexport const ${capitalizeFirstLetter(color)} = {`

  Object.entries(shades).forEach(([num, hex]) =>
    root += `
  '${base}${num}-hsl': '${hexTOhsl(hex)}',`
  //   root += `
  // '${base}${num}': '${hex}',`
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
    '${base}${num}': ${hex}`
  )

  return root
}, ``)

console.log(groupedObject)
// console.log(vars)
// console.log(channels)
