import { rovingIndex } from 'roving-ux';

function addTooltip(e, value) {

  const tooltip = document.createElement('span');
  tooltip.className = 'tooltip tooltip-show';
  tooltip.innerHTML = `${value} copied to clipboard!`;

  e.appendChild(tooltip);

  setTimeout(() => {
    tooltip.className = 'tooltip tooltip-hide';
  }, 1500);

  setTimeout(() => {
    e.removeChild(tooltip);
  }, 2000);
}

/**
 * Needed to convert camelCase style properties to hyphen-case for
 * getComputedStyle().getPropertyValue()
 * Also checks for cssFloat and converts to float.
 */
function hyphenateCSS(input) {
  if (input === 'cssFloat') {
    return 'float';
  }

  return input.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase() );
}

/**
 * Converts rgb to hex
 * https://css-tricks.com/converting-color-spaces-in-javascript/
 */

function RGBToHex(r, g, b) {
  let r_str = r.toString(16);
  let g_str = g.toString(16);
  let b_str = b.toString(16);

  if (r_str.length == 1) r_str = '0' + r_str;
  if (g_str.length == 1) g_str = '0' + g_str;
  if (b_str.length == 1) b_str = '0' + b_str;

  return '#' + r_str + g_str + b_str;
}

/**
 * Converts rgb to hsl
 * https://css-tricks.com/converting-color-spaces-in-javascript/
 */
function RGBToHSL(r, g, b) {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  // Calculate hue
  // No difference
  if (delta == 0) h = 0;
  // Red is max
  else if (cmax == r) h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g) h = (b - r) / delta + 2;
  // Blue is max
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return 'hsl(' + h + ' ' + s + '% ' + l + '%)';
}

function copyPropertyToClipboard(e, property) {
  const cb_prop = document.querySelector('#prop');
  const cb_color = document.querySelector('#color-code');

  const cb_hex = document.querySelector('#hex');
  const cb_rgb = document.querySelector('#rgb');
  const cb_hsl = document.querySelector('#hsl');

  let copiedText = '';

  if (cb_prop?.checked) {
    copiedText = e.style[property];
  }

  if (cb_color?.checked) {
    let rgb = window
      .getComputedStyle(e)
      .getPropertyValue(hyphenateCSS(property));

    if (cb_rgb?.checked) {
      copiedText = rgb;
    }

    rgb = rgb.match(/\d+/g);
    const r = parseInt(rgb[0]), g = parseInt(rgb[1]), b = parseInt(rgb[2]);
    if (cb_hex?.checked) {
      copiedText = RGBToHex(r, g, b);
    }

    if (cb_hsl?.checked) {
      copiedText = RGBToHSL(r, g, b);
    }
  }

  if (copiedText === '')
    return;

  console.log(copiedText);
  navigator.clipboard.writeText(copiedText);
  return copiedText;
}

function attachCopyEvent(query, property) {
  const elements = document.querySelectorAll(query);

  elements.forEach((element) => {
    element.addEventListener('click', function (e) {
      const copiedText = copyPropertyToClipboard(e.target, property);
      addTooltip(e.target, copiedText);
    });
  });
}

function selectCopyFormat() {
  const cb_prop = document.querySelector('#prop');
  // const cb_color = document.querySelector('#color-code');
  const color_format_inputs = document.querySelectorAll(
    'input[name="color-format"]'
  );

  if (cb_prop?.checked) {
    color_format_inputs.forEach((input) => {
      input.disabled = true;
    });
  } else {
    color_format_inputs.forEach((input) => {
      input.disabled = false;
    });
  }
}

function attachSelectCopyFormat() {
  const cb_prop = document.querySelector('#prop');
  const cb_color = document.querySelector('#color-code');

  cb_prop?.addEventListener('change', selectCopyFormat);
  cb_color?.addEventListener('change', selectCopyFormat);
}

function initializeCopy() {
  attachCopyEvent('.color-swatch', 'backgroundColor');
  attachSelectCopyFormat();

  document.querySelectorAll('.color-swatch-list').forEach((list) => {
    rovingIndex({element: list, target: 'button'});
  });
}

document.addEventListener('DOMContentLoaded', initializeCopy);
