const Shadows = {
  '--shadow-color': '220 3% 15%',
  '--shadow-strength': '1%',

  '--shadow-color-@media:dark': '220 40% 2%',
  '--shadow-strength-@media:dark': '25%',

  '--inner-shadow-highlight': 'inset 0 -.5px 0 0 #fff, inset 0 .5px 0 0 #0001',
  '--inner-shadow-highlight-@media:dark': 'inset 0 -.5px 0 0 #fff1, inset 0 .5px 0 0 #0007',
  
  '--shadow-1': '0 1px 2px -1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))',
  '--shadow-2': `
    0 3px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 7px 14px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%))`,
  '--shadow-3': `
    0 -1px 3px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 1px 2px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 2px 5px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 4px 12px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 12px 15px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))`,
  '--shadow-4': `
    0 -2px 5px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 1px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 2px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 9px 9px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 16px 16px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%))`,
  '--shadow-5': `
    0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 2px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 5px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 10px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 20px 20px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 40px 40px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))`,
  '--shadow-6': `
    0 -1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 2%)),
    0 3px 2px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 7px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),
    0 12px 10px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 4%)),
    0 22px 18px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%)),
    0 41px 33px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 6%)),
    0 100px 80px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 7%))`,

  '--inner-shadow-0': 'inset 0 0 0 1px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%))',
  '--inner-shadow-1': 'inset 0 1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)',
  '--inner-shadow-2': 'inset 0 1px 4px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)',
  '--inner-shadow-3': 'inset 0 2px 8px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)',
  '--inner-shadow-4': 'inset 0 2px 14px 0 hsl(var(--shadow-color) / calc(var(--shadow-strength) + 9%)), var(--inner-shadow-highlight)',
}

export default Shadows

export const StaticShadows = Object.fromEntries(
  Object.entries(Shadows)
    .map(([key,value]) => {
      value = value.replace(/var(--shadow-color)/g, Shadows['--shadow-color'])
      value = value.replace(/var(--shadow-strength)/g, Shadows['--shadow-strength'])
      return [key, value]
    })
    .filter(([key]) =>
      !['--shadow-color', '--shadow-strength'].includes(key)
    )
)
