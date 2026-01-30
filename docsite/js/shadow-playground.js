const shadowHue = document.querySelector('#shadowHue')
const shadowHueValue = document.querySelector('#shadowHueValue')
const shadowSaturation = document.querySelector('#shadowSaturation')
const shadowSaturationValue = document.querySelector('#shadowSaturationValue')
const shadowLightness = document.querySelector('#shadowLightness')
const shadowLightnessValue = document.querySelector('#shadowLightnessValue')
const shadowStrength = document.querySelector('#shadowStrength')
const shadowStrengthValue = document.querySelector('#shadowStrengthValue')
const shadowout = document.querySelector('#shadowout')

const shadowState = {
  hue: 220,
  saturation: 3,
  lightness: 15,
  strength: 1,
}

const syncShadowInputs = (range, number, key, formatter = val => val) => {
  range.oninput = e => {
    number.value = e.target.value
    shadowState[key] = e.target.value
    updateShadowSheet()
  }

  number.oninput = e => {
    range.value = e.target.value
    shadowState[key] = e.target.value
    updateShadowSheet()
    range.dispatchEvent(new Event('input'))
  }
}

syncShadowInputs(shadowHue, shadowHueValue, 'hue')
syncShadowInputs(shadowSaturation, shadowSaturationValue, 'saturation')
syncShadowInputs(shadowLightness, shadowLightnessValue, 'lightness')
syncShadowInputs(shadowStrength, shadowStrengthValue, 'strength')

function updateShadowSheet() {
  const styles = `@import "open-props/shadows";

:root {
  --shadow-color: ${shadowState.hue} ${shadowState.saturation}% ${shadowState.lightness}%;
  --shadow-strength: ${shadowState.strength}%;
}`

  shadowSheet.replaceSync(`:root {
  --shadow-color: ${shadowState.hue} ${shadowState.saturation}% ${shadowState.lightness}%;
  --shadow-strength: ${shadowState.strength}%;
}`, 0)
  shadowout.innerText = styles
}

const shadowSheet = new CSSStyleSheet()
document.adoptedStyleSheets = [...document.adoptedStyleSheets, shadowSheet]

updateShadowSheet()
shadowHue.dispatchEvent(new Event('input'))
shadowSaturation.dispatchEvent(new Event('input'))
shadowLightness.dispatchEvent(new Event('input'))
shadowStrength.dispatchEvent(new Event('input'))
