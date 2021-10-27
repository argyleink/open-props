const sliders = document.querySelectorAll('input[type="range"]')

const rangeToPercent = slider => {
  const max = slider.getAttribute('max') || 10
  const percent = slider.value / max * 100

  return `${parseInt(percent)}%`
}

sliders.forEach(slider => {
  slider.style.setProperty('--track-fill', rangeToPercent(slider))

  slider.addEventListener('input', e => {
    e.target.style.setProperty('--track-fill', rangeToPercent(e.target))
    e.target
      .parentElement.querySelector('.sample-text')
      .style[e.target.dataset.prop] = `var(--font-${e.target.name}-${e.target.value})`
  })
})