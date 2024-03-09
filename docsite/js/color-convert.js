
// https://css-tricks.com/converting-color-spaces-in-javascript/
function RGBToHex(r, g, b) {
  let r_str = r.toString(16);
  let g_str = g.toString(16);
  let b_str = b.toString(16);

  if (r_str.length == 1) r_str = '0' + r_str;
  if (g_str.length == 1) g_str = '0' + g_str;
  if (b_str.length == 1) b_str = '0' + b_str;

  return '#' + r_str + g_str + b_str;
}

// https://css-tricks.com/converting-color-spaces-in-javascript/
function RGBToHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;

  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return 'hsl(' + h + ' ' + s + '% ' + l + '%)';
}

export { RGBToHSL, RGBToHex };
