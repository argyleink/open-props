const shadowHue = document.querySelector('#shadowHue')
const shadowHueValue = document.querySelector('#shadowHueValue')
const shadowSaturation = document.querySelector('#shadowSaturation')
const shadowSaturationValue = document.querySelector('#shadowSaturationValue')
const shadowLightness = document.querySelector('#shadowLightness')
const shadowLightnessValue = document.querySelector('#shadowLightnessValue')
const shadowStrength = document.querySelector('#shadowStrength')
const shadowStrengthValue = document.querySelector('#shadowStrengthValue')
const shadowCodeOutput = document.querySelector('#shadowout')
const shadowPreviewGrid = document.querySelector('.shadow-preview-grid')

if (!shadowPreviewGrid) {
  throw new Error('Shadow playground preview grid not found')
}

const shadowState = {
  hue: 220,
  saturation: 3,
  lightness: 15,
  strength: 1,
}

const syncShadowInputs = (range, number, key) => {
  range.oninput = e => {
    number.value = e.target.value
    shadowState[key] = e.target.value
    updateShadowPreview()
  }

  number.oninput = e => {
    range.value = e.target.value
    shadowState[key] = e.target.value
    updateShadowPreview()
  }
}

syncShadowInputs(shadowHue, shadowHueValue, 'hue')
syncShadowInputs(shadowSaturation, shadowSaturationValue, 'saturation')
syncShadowInputs(shadowLightness, shadowLightnessValue, 'lightness')
syncShadowInputs(shadowStrength, shadowStrengthValue, 'strength')

function generateShadows(h, s, l, baseStrength) {
  const color = `${h} ${s}% ${l}%`
  const str = (add) => `${parseFloat(baseStrength) + add}%`
  
  return [
    `0 1px 2px -1px hsl(${color} / ${str(9)})`,
    `0 3px 5px -2px hsl(${color} / ${str(3)}), 0 7px 14px -5px hsl(${color} / ${str(5)})`,
    `0 -1px 3px 0 hsl(${color} / ${str(2)}), 0 1px 2px -5px hsl(${color} / ${str(2)}), 0 2px 5px -5px hsl(${color} / ${str(4)}), 0 4px 12px -5px hsl(${color} / ${str(5)}), 0 12px 15px -5px hsl(${color} / ${str(7)})`,
    `0 -2px 5px 0 hsl(${color} / ${str(2)}), 0 1px 1px -2px hsl(${color} / ${str(3)}), 0 2px 2px -2px hsl(${color} / ${str(3)}), 0 5px 5px -2px hsl(${color} / ${str(4)}), 0 9px 9px -2px hsl(${color} / ${str(5)}), 0 16px 16px -2px hsl(${color} / ${str(6)})`,
    `0 -1px 2px 0 hsl(${color} / ${str(2)}), 0 2px 1px -2px hsl(${color} / ${str(3)}), 0 5px 5px -2px hsl(${color} / ${str(3)}), 0 10px 10px -2px hsl(${color} / ${str(4)}), 0 20px 20px -2px hsl(${color} / ${str(5)}), 0 40px 40px -2px hsl(${color} / ${str(7)})`,
    `0 -1px 2px 0 hsl(${color} / ${str(2)}), 0 3px 2px -2px hsl(${color} / ${str(3)}), 0 7px 5px -2px hsl(${color} / ${str(3)}), 0 12px 10px -2px hsl(${color} / ${str(4)}), 0 22px 18px -2px hsl(${color} / ${str(5)}), 0 41px 33px -2px hsl(${color} / ${str(6)}), 0 100px 80px -2px hsl(${color} / ${str(7)})`
  ]
}

function updateShadowPreview() {
  const { hue, saturation, lightness, strength } = shadowState
  const shadows = generateShadows(hue, saturation, lightness, strength)
  
  // Update preview boxes with computed shadows
  const boxes = shadowPreviewGrid.querySelectorAll('div')
  shadows.forEach((shadow, i) => {
    if (boxes[i]) {
      boxes[i].style.boxShadow = shadow
    }
  })
  
  // Update code output
  const styles = `@import "open-props/shadows";

:root {
  --shadow-color: ${hue} ${saturation}% ${lightness}%;
  --shadow-strength: ${strength}%;
}`
  shadowCodeOutput.innerText = styles
}

updateShadowPreview()
