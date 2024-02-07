import 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/prism.min.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/plugins/normalize-whitespace/prism-normalize-whitespace.min.js'

import '/js/easing.js'
import '/js/animations.js'
import '/js/slider.js'
import '/js/scrollspy.js'
import '/js/select.js'

function clickToCopy(style, property) {
  navigator.clipboard.writeText(style[property]);
  console.log(style[property])
}

function addCopyToColorSwatches() {
  const colorSwatches = document.querySelectorAll('.color-swatch');
  
  colorSwatches.forEach((colorSwatch) => {
    colorSwatch.addEventListener("click", () => clickToCopy(colorSwatch.style, "backgroundColor"))
  });
}

window.onload = addCopyToColorSwatches;