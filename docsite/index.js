import 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/prism.min.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/plugins/normalize-whitespace/prism-normalize-whitespace.min.js'

// easing controls
document
  .querySelectorAll('.animation-control-header > button')
  .forEach(button => {
    button.addEventListener('click', e => {
      e.currentTarget
        .closest('div')
        .querySelector('.ease-demo')
        .classList.toggle('paused')
    })
  })

const toggleIcons = button => {
  button
    .querySelectorAll('use')
    .forEach(icon => {
      icon.classList.toggle('hidden')
    })
}

// play buttons
document
  .querySelectorAll('.play-button')
  .forEach(button => {
    button.addEventListener('click', e => {
      toggleIcons(e.currentTarget)
    })
  })

// animation controls
const cleanup = e => {
  setTimeout(()=> {
    e.target.style = ''
    toggleIcons(e.target.querySelector('button'))
  }, 500)
}

document
  .querySelectorAll('.animation-demo')
  .forEach(group => {
    group.addEventListener('click', e => {
      if (e.target.nodeName !== 'BUTTON') return

      let sample = e.target.closest('.animation-demo-target')

      if (sample.dataset.startingStyles) {
        sample.style = sample.dataset.startingStyles

        setTimeout(()=> {
          sample.style.animation = `var(--animation-${sample.dataset.animation}) forwards`
          sample.addEventListener('animationend', cleanup, {once:true})
        }, 300)
      }
      else if (sample.style.animation != '') {
        sample.style.animation = null
        sample.removeEventListener('animationend', cleanup)
      }
      else {
        sample.style.animation = `var(--animation-${sample.dataset.animation}) forwards`
        sample.addEventListener('animationend', cleanup, {once:true})
      }
    })
  })

// slider
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