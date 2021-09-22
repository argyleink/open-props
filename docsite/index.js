import 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/prism.min.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/plugins/line-numbers/prism-line-numbers.min.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/plugins/normalize-whitespace/prism-normalize-whitespace.min.js'

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