
function copyPropertyToClipboard(e, property) {
  navigator.clipboard.writeText(e.style[property]);
  console.log(e.style[property]);
}

function addCopyToColorSwatches() {
  const colorSwatches = document.querySelectorAll('.color-swatch');

  colorSwatches.forEach((colorSwatch) => {
    colorSwatch.addEventListener('click', function(e) {
      copyPropertyToClipboard(e.target, 'backgroundColor');
      addTooltip(e.target, 'backgroundColor');
    });
  });
}

window.onload = addCopyToColorSwatches;
