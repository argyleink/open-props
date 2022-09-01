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

export const toggleIcons = button => {
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