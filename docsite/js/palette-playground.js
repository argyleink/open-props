const shuffleButton = document.querySelector('#shuffleButton')
const paletteHue = document.querySelector('#paletteHue')
const paletteHueValue = document.querySelector('#paletteHueValue')
const paletteHueRotate = document.querySelector('#paletteHueRotate')
const paletteHueRotateValue = document.querySelector('#paletteHueRotateValue')
const paletteChroma = document.querySelector('#paletteChroma')
const paletteChromaValue = document.querySelector('#paletteChromaValue')
const paletteout = document.querySelector('#paletteout')
const presetHueName = document.querySelector('#presetHueName')

const hueNames = {
  0: '',
  25: '--hue-red',
  75: '--hue-orange',
  100: '--hue-yellow',
  125: '--hue-lime',
  145: '--hue-green',
  185: '--hue-teal',
  210: '--hue-cyan',
  240: '--hue-blue',
  270: '--hue-indigo',
  290: '--hue-violet',
  310: '--hue-purple',
  350: '--hue-pink',
  360: ''
}

function updateHueName(value) {
  const name = hueNames[value]
  if (presetHueName) {
    presetHueName.innerHTML = name ? `<code>${name}</code>` : ''
  }
}

shuffleButton.onclick = randomizeColors

function randomizeColors(e) {
  const btn = e.currentTarget || shuffleButton
  btn.querySelector('svg').animate([
    { transform: 'rotate(1turn)' }
  ], {
    duration: 1000,
    easing: CSS.supports('animation-timing-function: linear(0, 1)')
      ? `linear(
          0, 0.009, 0.035 2.1%, 0.141, 0.281 6.7%, 0.723 12.9%, 0.938 16.7%, 1.017,
          1.077, 1.121, 1.149 24.3%, 1.159, 1.163, 1.161, 1.154 29.9%, 1.129 32.8%,
          1.051 39.6%, 1.017 43.1%, 0.991, 0.977 51%, 0.974 53.8%, 0.975 57.1%,
          0.997 69.8%, 1.003 76.9%, 1.004 83.8%, 1
        )`
      : `ease`,
  })

  palette.hue = Math.round(Math.random() * 360)
  palette.hueRotateBy = Math.round(Math.random() * 6 * (Math.random() > .5 ? 1 : -1))
  palette.chroma = Math.random()

  updateInputs()
}

function updateInputs() {
  paletteHue.value = palette.hue
  paletteHueRotate.value = palette.hueRotateBy
  paletteChroma.value = palette.chroma

  paletteHue.dispatchEvent(new Event('input'))
  paletteHueRotate.dispatchEvent(new Event('input'))
  paletteChroma.dispatchEvent(new Event('input'))
}

const palette = {
  hue: 270,
  hueRotateBy: 1,
  chroma: .9,
}

const syncInputs = (range, number, key) => {
  range.oninput = e => {
    number.value = e.target.value
    palette[key] = e.target.value
    if (key === 'hue') {
      updateHueName(e.target.value)
    }
    updateSheet()
  }

  number.oninput = e => {
    range.value = e.target.value
    palette[key] = e.target.value
    if (key === 'hue') {
      updateHueName(e.target.value)
    }
    updateSheet()
    range.dispatchEvent(new Event('input'))
  }
}

syncInputs(paletteHue, paletteHueValue, 'hue')
syncInputs(paletteHueRotate, paletteHueRotateValue, 'hueRotateBy')
syncInputs(paletteChroma, paletteChromaValue, 'chroma')

function updateSheet() {
  const hueName = hueNames[palette.hue]
  const hueValue = hueName ? `var(${hueName})` : palette.hue

  const importStatement = hueName ? `@import "open-props/oklch-hues";\n\n` : ''

  const styles = `${importStatement}:root {
  --palette-hue: ${hueValue};
  --palette-hue-rotate-by: ${palette.hueRotateBy};
  --palette-chroma: ${palette.chroma};
}`

  paletteSheet.replaceSync(`:root {
  --palette-hue: ${palette.hue};
  --palette-hue-rotate-by: ${palette.hueRotateBy};
  --palette-chroma: ${palette.chroma};
}`, 0)
  paletteout.innerText = styles
}

const paletteSheet = new CSSStyleSheet()
document.adoptedStyleSheets = [...document.adoptedStyleSheets, paletteSheet]

updateSheet()
paletteHue.dispatchEvent(new Event('input'))
paletteHueRotate.dispatchEvent(new Event('input'))
paletteChroma.dispatchEvent(new Event('input'))
