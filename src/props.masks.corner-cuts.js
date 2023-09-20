// big thanks to Temani Afif: https://twitter.com/ChallengesCss
export default {
  '--mask-corner-cut-circles-1': 'radial-gradient(1rem at 1rem 1rem,#0000 99%,#000) -1rem -1rem',
  '--mask-corner-cut-circles-2': 'radial-gradient(2rem at 2rem 2rem,#0000 99%,#000) -2rem -2rem',
  '--mask-corner-cut-circles-3': 'radial-gradient(4rem at 4rem 4rem,#0000 99%,#000) -4rem -4rem',
  '--mask-corner-cut-squares-1': 'conic-gradient(at calc(2*1rem) calc(2*1rem),#000 75%,#0000 0) -1rem -1rem',
  '--mask-corner-cut-squares-2': 'conic-gradient(at calc(2*2rem) calc(2*2rem),#000 75%,#0000 0) -2rem -2rem',
  '--mask-corner-cut-squares-3': 'conic-gradient(at calc(2*4rem) calc(2*4rem),#000 75%,#0000 0) -4rem -4rem',
  '--mask-corner-cut-angles-1': `
    conic-gradient(from -45deg at 1rem 1rem,#0000 25%,#000 0) 
    -1rem 0   /100% 51% repeat-x,
    conic-gradient(from 135deg at 1rem calc(100% - 1rem),#0000 25%,#000 0) 
    -1rem 100%/100% 51% repeat-x
  `,
  '--mask-corner-cut-angles-2': `
    conic-gradient(from -45deg at 2rem 2rem,#0000 25%,#000 0) 
    -2rem 0   /100% 51% repeat-x,
    conic-gradient(from 135deg at 2rem calc(100% - 2rem),#0000 25%,#000 0) 
    -2rem 100%/100% 51% repeat-x
  `,
  '--mask-corner-cut-angles-3': `
    conic-gradient(from -45deg at 4rem 4rem,#0000 25%,#000 0) 
    -4rem 0   /100% 51% repeat-x,
    conic-gradient(from 135deg at 4rem calc(100% - 4rem),#0000 25%,#000 0) 
    -4rem 100%/100% 51% repeat-x
  `,
}
