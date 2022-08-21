// big thanks to Temani Afif: https://twitter.com/ChallengesCss
// https://github.com/argyleink/open-props/discussions/71
export default {
  '--mask-edge-scoop-bottom': 'radial-gradient(20px at 50% 100%,#0000 97%,#000) 50% / calc(1.9 * 20px) 100%',
  '--mask-edge-scoop-top': 'radial-gradient(20px at 50% 0,#0000 97%,#000) 50% / calc(1.9 * 20px) 100%',
  '--mask-edge-scoop-vertical': 'radial-gradient(20px at 50% 20px,#0000 97%,#000) 50% -20px/ calc(1.9 * 20px) 100%',
  '--mask-edge-scoop-left': 'radial-gradient(20px at 0 50%,#0000 97%,#000) 50%/ 100% calc(1.9 * 20px)',
  '--mask-edge-scoop-right': 'radial-gradient(20px at 100% 50%,#0000 97%,#000) 50%/ 100% calc(1.9 * 20px)',
  '--mask-edge-scoop-horizontal': 'radial-gradient(20px at 20px 50%,#0000 97%,#000) -20px/ 100% calc(1.9 * 20px)',
  '--mask-edge-scalloped': `
    radial-gradient(farthest-side,#000 97%,#0000) 0 0 / 20px 20px round,
    linear-gradient(#000 0 0) 50%/calc(100% - 20px) calc(100% - 20px) no-repeat
  `,
  '--mask-edge-scalloped-bottom': `
    linear-gradient(to top,#0000 20px,#000 0),
    radial-gradient(20px at top,#000 97%,#0000) bottom / calc(1.9 * 20px) 20px
  `,
  '--mask-edge-scalloped-top': `
    linear-gradient(to bottom,#0000 20px,#000 0),
    radial-gradient(20px at bottom,#000 97%,#0000) top / calc(1.9 * 20px) 20px
  `,
  '--mask-edge-scalloped-vertical': `
    linear-gradient(0deg,#0000 calc(2 * 20px),#000 0) 0 20px,
    radial-gradient(20px,#000 97%,#0000) 50% / calc(1.9 * 20px) calc(2 * 20px) repeat space
  `,
  '--mask-edge-scalloped-left': `
    linear-gradient(to right,#0000 20px,#000 0),
    radial-gradient(20px at right,#000 97%,#0000) left / 20px calc(1.9 * 20px)
  `,
  '--mask-edge-scalloped-right': `
    linear-gradient(to left,#0000 20px,#000 0),
    radial-gradient(20px at left,#000 97%,#0000) right / 20px calc(1.9 * 20px)
  `,
  '--mask-edge-scalloped-horizontal': `
    linear-gradient(-90deg,#0000 calc(2 * 20px),#000 0) 20px,
    radial-gradient(20px,#000 97%,#0000) 50% / calc(2 * 20px) calc(1.9 * 20px) space repeat
  `,
  '--mask-edge-drip-bottom': `
    radial-gradient(20px at bottom,#0000 97%,#000) 50% calc(100% - 20px) / calc(2 * 20px) 100% repeat-x,
    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% - 20px) 99% / calc(4 * 20px) calc(2 * 20px) repeat-x
  `,
  '--mask-edge-drip-top': `
    radial-gradient(20px at top,#0000 97%,#000) 50% 20px / calc(2 * 20px) 100% repeat-x,
    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% - 20px) 1% / calc(4 * 20px) calc(2 * 20px) repeat-x
  `,
  '--mask-edge-drip-vertical': `
    radial-gradient(20px at top   ,#0000 97%,#000) 50%             20px  / calc(2 * 20px) 51% repeat-x,
    radial-gradient(20px at bottom,#0000 97%,#000) 50% calc(100% - 20px) / calc(2 * 20px) 51% repeat-x,
    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% -   20px) 1%  / calc(4 * 20px) calc(2 * 20px) repeat-x,
    radial-gradient(20px at 25% 50%,#000 97%,#0000) calc(50% - 3*20px) 99% / calc(4 * 20px) calc(2 * 20px) repeat-x
  `,
  '--mask-edge-drip-left': `
    radial-gradient(20px at left,#0000 97%,#000) 20px 50% / 100% calc(2 * 20px) repeat-y,
    radial-gradient(20px at 50% 25%,#000 97%,#0000) 1% calc(50% - 20px) / calc(2 * 20px) calc(4 * 20px) repeat-y
  `,
  '--mask-edge-drip-right': `
    radial-gradient(20px at right,#0000 97%,#000) calc(100% - 20px) 50% / 100% calc(2 * 20px) repeat-y,
    radial-gradient(20px at 50% 25%,#000 97%,#0000) 99% calc(50% - 20px) / calc(2 * 20px) calc(4 * 20px) repeat-y
  `,
  '--mask-edge-drip-horizontal': `
    radial-gradient(20px at left ,#0000 97%,#000)             20px  50% / 51% calc(2 * 20px) repeat-y,  
    radial-gradient(20px at right,#0000 97%,#000) calc(100% - 20px) 50% / 51% calc(2 * 20px) repeat-y,
    radial-gradient(20px at 50% 25%,#000 97%,#0000) 1%  calc(50% -   20px) / calc(2 * 20px) calc(4 * 20px) repeat-y,
    radial-gradient(20px at 50% 25%,#000 97%,#0000) 99% calc(50% - 3*20px) / calc(2 * 20px) calc(4 * 20px) repeat-y
  `,
  '--mask-edge-zig-zag-top': 'conic-gradient(from 135deg at top,#0000,#000 1deg 90deg,#0000 91deg) 50% / calc(2 * 20px) 100%',
  '--mask-edge-zig-zag-bottom': 'conic-gradient(from -45deg at bottom,#0000,#000 1deg 90deg,#0000 91deg) 50% / calc(2 * 20px) 100%',
  '--mask-edge-zig-zag-left': 'conic-gradient(from 45deg at left,#0000,#000 1deg 90deg,#0000 91deg) 50% / 100% calc(2 * 20px)',
  '--mask-edge-zig-zag-right': 'conic-gradient(from -135deg at right,#0000,#000 1deg 90deg,#0000 91deg) 50% / 100% calc(2 * 20px)',
  '--mask-edge-zig-zag-horizontal': `
    conic-gradient(from   45deg at left ,#0000,#000 1deg 90deg,#0000 91deg) left  / 51% calc(2 * 20px) repeat-y,
    conic-gradient(from -135deg at right,#0000,#000 1deg 90deg,#0000 91deg) right / 51% calc(2 * 20px) repeat-y
  `,
  '--mask-edge-zig-zag-vertical': `
    conic-gradient(from 135deg at top   ,#0000,#000 1deg 90deg,#0000 91deg) top    / calc(2 * 20px) 51% repeat-x,
    conic-gradient(from -45deg at bottom,#0000,#000 1deg 90deg,#0000 91deg) bottom / calc(2 * 20px) 51% repeat-x
  `,
}
