// Tutorial: https://css-tricks.com/how-to-get-a-pixel-perfect-linearly-scaled-ui/ by @Georgi Nikoloff 
// Demo: https://codepen.io/airen/full/oNWwdoZ by @Airen
 
export default {
  // 750px is the ideal viewport width that the UI designers who created the dashboard used when designing their Figma artboards  
  "--ideal-viewport-width": "750",
  // The actual width of the user device
  "--current-viewport-width": "100vw",
  // Set our minimum and maximum allowed layout widths
  "--min-viewport-width": "320px",
  "--max-viewport-width": "720px",

  // The clamp() function takes three comma separated expressions as its parameter, in the order of minimum value, preferred value and maximum value
  "--clamped-viewport-width":
    "clamp( var(--min-viewport-width), var(--current-viewport-width),var(--max-viewport-width))",
};
