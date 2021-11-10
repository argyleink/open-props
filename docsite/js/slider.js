const sliders = document.querySelectorAll('input[type="range"]')

const rangeToPercent = slider => {
  let percent
  let val = slider.value
  let max = slider.max

  if (slider.min === '-1' && (val === "-1" || val === "0"))
    percent = (val+1) / max * 100
  else if (slider.min === '-1' && val === "1")
    percent = val / (max-2) * 100
  else
    percent = val / max * 100

  return `${parseInt(percent)}%`
}

const highlightProperty = slider => {
  if (slider.connectedProperty)
    slider.connectedProperty.style.color = null
    
  let offset = parseInt(slider.value)

  if (slider.min === '1') offset -= 1
  if (slider.min === '-1') offset += 1

  slider.connectedProperty = slider.parentElement.parentElement
    .querySelectorAll(`code > .property`)[offset]
  slider.connectedProperty.style.color = 'var(--text-1)'
}

sliders.forEach(slider => {
  slider.style.setProperty('--track-fill', rangeToPercent(slider))
  // todo: wait for prism to tokenize code blocks
  // or figure out how to prerender prism blocks
  // highlightProperty(slider)

  slider.addEventListener('input', e => {
    slider.style.setProperty('--track-fill', rangeToPercent(slider))

    let value = slider.value
    if (value === '-1') value = '00'

    slider
      .parentElement.querySelector('.sample-text')
      .style[slider.dataset.prop] = `var(--font-${slider.name}-${value})`

    highlightProperty(slider)
  })
})