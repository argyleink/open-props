// https://github.com/argyleink/open-props/discussions/71
export default {
  '--mask-edge-scoop-bottom': `
    linear-gradient(#000 0 0) top/100% calc(100% - 1rem) no-repeat,
    radial-gradient(circle farthest-side,#0000 97%,#000) 50% calc(100% - 1rem)/calc(1.9*1rem) calc(2*1rem)
  `,
  '--mask-edge-scoop-top': `
    linear-gradient(#000 0 0) bottom/100% calc(100% - 1rem) no-repeat,
    radial-gradient(circle farthest-side,#0000 97%,#000) 50% 1rem/calc(1.9*1rem) calc(2*1rem)
  `,
  '--mask-edge-scoop-vertical': `
    linear-gradient(#000 0 0) center/100% calc(100% - 2*1rem) no-repeat,
    radial-gradient(circle farthest-side at top,#0000 97%,#000) top/calc(1.9*1rem) 1rem repeat-x,
    radial-gradient(circle farthest-side at bottom,#0000 97%,#000) bottom/calc(1.9*1rem) 1rem repeat-x
  `,
  '--mask-edge-scoop-left': `
    linear-gradient(#000 0 0) right/calc(100% - 1rem) 100% no-repeat,
    radial-gradient(circle farthest-side,#0000 97%,#000) 1rem 50%/calc(2*1rem) calc(1.9*1rem)
  `,
  '--mask-edge-scoop-right': `
    linear-gradient(#000 0 0) left/calc(100% - 1rem) 100% no-repeat,
    radial-gradient(circle farthest-side,#0000 97%,#000) calc(100% - 1rem) 50%/calc(2*1rem) calc(1.9*1rem)
  `,

  '--mask-edge-scoop-horizontal': `
    linear-gradient(#000 0 0) center/calc(100% - 2*1rem) 100% no-repeat,
    radial-gradient(circle farthest-side at left,#0000 97%,#000) left/1rem calc(1.9*1rem) repeat-y,
    radial-gradient(circle farthest-side at right,#0000 97%,#000) right/1rem calc(1.9*1rem) repeat-y
  `,
  '--mask-edge-scalloped-bottom': `
    linear-gradient(#000 0 0) top/100% calc(100% - 1rem) no-repeat,
    radial-gradient(circle farthest-side at top,#000 97%,#0000) bottom/calc(1.9*1rem) 1rem repeat-x
  `,
  '--mask-edge-scalloped-top': `
    linear-gradient(#000 0 0) bottom/100% calc(100% - 1rem) no-repeat,
    radial-gradient(circle farthest-side at bottom,#000 97%,#0000) top/calc(1.9*1rem) 1rem repeat-x
  `,
  '--mask-edge-scalloped-vertical': `
    linear-gradient(#000 0 0) center/100% calc(100% - 2*1rem) no-repeat,
    radial-gradient(circle farthest-side,#000 97%,#0000) 0/calc(1.9*1rem) calc(2*1rem) repeat space
  `,
  '--mask-edge-scalloped-left': `
    linear-gradient(#000 0 0) right/calc(100% - 1rem) 100% no-repeat,
    radial-gradient(circle farthest-side at right,#000 97%,#0000) left/1rem calc(1.9*1rem) repeat-y
  `,
  '--mask-edge-scalloped-right': `
    linear-gradient(#000 0 0) left/calc(100% - 1rem) 100% no-repeat,
    radial-gradient(circle farthest-side at left,#000 97%,#0000) right/1rem calc(1.9*1rem) repeat-y
  `,
  '--mask-edge-scalloped-horizontal': `
    linear-gradient(#000 0 0) center/calc(100% - 2*1rem) 100% no-repeat,
    radial-gradient(circle farthest-side,#000 97%,#0000) 0/calc(2*1rem) calc(1.9*1rem) space repeat
  `,
  '--mask-edge-drip-bottom': `
    linear-gradient(#000 0 0) top/100% calc(100% - 2*1rem) no-repeat,      
    radial-gradient(circle farthest-side at bottom,#0000 97%,#000) 50% calc(100% - 1rem)/calc(2*1rem) 1rem repeat-x,
    radial-gradient(circle closest-side at 25% 50%,#000 97%,#0000) calc(50% - 1rem) 99%/calc(2*2*1rem) calc(2*1rem) repeat-x
  `,
  '--mask-edge-drip-top': `
    linear-gradient(#000 0 0) bottom/100% calc(100% - 2*1rem) no-repeat,      
    radial-gradient(circle farthest-side at top,#0000 97%,#000) 50% 1rem/calc(2*1rem) 1rem repeat-x,
    radial-gradient(circle closest-side at 25% 50%,#000 97%,#0000) calc(50% - 1rem) 1%/calc(4*1rem) calc(2*1rem) repeat-x
  `,
  '--mask-edge-drip-vertical': `
    linear-gradient(#000 0 0) center/100% calc(100% - 4*1rem) no-repeat,      
    radial-gradient(circle farthest-side at top,#0000 97%,#000) 50% 1rem/calc(2*1rem) 1rem repeat-x,
    radial-gradient(circle farthest-side at bottom,#0000 97%,#000) 50% calc(100% - 1rem)/calc(2*1rem) 1rem repeat-x,
    radial-gradient(circle closest-side at 25% 50%,#000 97%,#0000) calc(50% - 1rem) 1%/calc(4*1rem) calc(2*1rem) repeat-x,
    radial-gradient(circle closest-side at 25% 50%,#000 97%,#0000) calc(50% - 3*1rem) 99%/calc(4*1rem) calc(2*1rem) repeat-x
  `,
  '--mask-edge-drip-left': `
    linear-gradient(#000 0 0) right/calc(100% - 2*1rem) 100% no-repeat,      
    radial-gradient(circle farthest-side at left,#0000 97%,#000) 1rem 50%/1rem calc(2*1rem) repeat-y,
    radial-gradient(circle closest-side at 50% 25%,#000 97%,#0000) 1% calc(50% - 1rem)/calc(2*1rem) calc(4*1rem) repeat-y
  `,
  '--mask-edge-drip-right': `
    linear-gradient(#000 0 0) left/calc(100% - 2*1rem) 100% no-repeat,      
    radial-gradient(circle farthest-side at right,#0000 97%,#000) calc(100% - 1rem) 50%/1rem calc(2*1rem) repeat-y,
    radial-gradient(circle closest-side at 50% 25%,#000 97%,#0000) 99% calc(50% - 1rem)/calc(2*1rem) calc(4*1rem) repeat-y
  `,
  '--mask-edge-drip-horizontal': `
    linear-gradient(#000 0 0) center/calc(100% - 4*1rem) 100% no-repeat,      
    radial-gradient(circle farthest-side at left,#0000 97%,#000) 1rem 50%/1rem calc(2*1rem) repeat-y,  
    radial-gradient(circle farthest-side at right,#0000 97%,#000) calc(100% - 1rem) 50%/1rem calc(2*1rem) repeat-y,
    radial-gradient(circle closest-side at 50% 25%,#000 97%,#0000) 1% calc(50% - 1rem)/calc(2*1rem) calc(4*1rem) repeat-y,
    radial-gradient(circle closest-side at 50% 25%,#000 97%,#0000) 99% calc(50% - 3*1rem)/calc(2*1rem) calc(4*1rem) repeat-y
  `,
  '--mask-scalloped-edges': `
    radial-gradient(farthest-side,#000 97%,#0000) 0 0/1rem 1rem round,
    linear-gradient(#000 0 0) 50%/calc(100% - 1rem) calc(100% - 1rem) no-repeat
  `,
  '--mask-zig-zag-top': `
    linear-gradient(#000 0 0) bottom/100% calc(100% - 1rem) no-repeat,
    conic-gradient(from 135deg at top,#0000,#000 1deg 90deg,#0000 91deg) top/calc(2*1rem) 1rem repeat-x
  `,
  '--mask-zig-zag-bottom': `
    linear-gradient(#000 0 0) top/100% calc(100% - 1rem) no-repeat,
    conic-gradient(from -45deg at bottom,#0000,#000 1deg 90deg,#0000 91deg) bottom/calc(2*1rem) 1rem repeat-x
  `,
  '--mask-zig-zag-left': `
    linear-gradient(#000 0 0) right/calc(100% - 1rem) 100% no-repeat,
    conic-gradient(from 45deg at left,#0000,#000 1deg 90deg,#0000 91deg) left/1rem calc(2*1rem) repeat-y
  `,
  '--mask-zig-zag-right': `
    linear-gradient(#000 0 0) left/calc(100% - 1rem) 100% no-repeat,
    conic-gradient(from -135deg at right,#0000,#000 1deg 90deg,#0000 91deg) right/1rem calc(2*1rem) repeat-y
  `,
  '--mask-zig-zag-horizontal': `
    linear-gradient(#000 0 0) center/calc(100% - 2*1rem) 100% no-repeat,
    conic-gradient(from 45deg at left,#0000,#000 1deg 90deg,#0000 91deg) left/1rem calc(2*1rem) repeat-y,
    conic-gradient(from -135deg at right,#0000,#000 1deg 90deg,#0000 91deg) right/1rem calc(2*1rem) repeat-y
  `,
  '--mask-zig-zag-vertical': `
    linear-gradient(#000 0 0) center/100% calc(100% - 2*1rem) no-repeat,
    conic-gradient(from 135deg at top,#0000,#000 1deg 90deg,#0000 91deg) top/calc(2*1rem) 1rem repeat-x,
    conic-gradient(from -45deg at bottom,#0000,#000 1deg 90deg,#0000 91deg) bottom/calc(2*1rem) 1rem repeat-x
  `,
}
