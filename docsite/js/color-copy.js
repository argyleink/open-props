function addTooltip(e, property) {
  const tooltip = document.createElement('span');
  tooltip.className = 'tooltip tooltip-show';
  tooltip.innerHTML = `${e.style[property]} copied to clipboard!`;
  e.appendChild(tooltip);
  setTimeout(() => {
    tooltip.className = 'tooltip tooltip-hide';
  }, 1500);

  setTimeout(() => {
    e.removeChild(tooltip);
  }, 2000);
}

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
