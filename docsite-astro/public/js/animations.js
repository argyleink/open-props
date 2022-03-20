import {toggleIcons} from './easing.js'

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