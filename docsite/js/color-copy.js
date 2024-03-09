import { rovingIndex } from 'roving-ux';
import { RGBToHSL, RGBToHex } from './color-convert';

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

function hyphenateCSS(input) {
  if (input === 'cssFloat') {
    return 'float';
  }

  return input.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase() );
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
