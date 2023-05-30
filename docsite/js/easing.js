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

export const showPlayIcon = button => {
  button
    .querySelectorAll('use')
    .forEach(icon => {
      if (icon.getAttribute('href') === '#play-icon') {
        icon.classList.remove('hidden')
      } else {
        icon.classList.add('hidden');
      }
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