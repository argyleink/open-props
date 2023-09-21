import * as Colors from '../src/props.colors.js'

const colors = Object.keys(Colors)
  .filter(exportName => exportName !== "default")
  .map(hueName => hueName.toLowerCase())

export const toAtProperty = props => 
  props.map(([key, token]) => {
    let syntax

    let isLength = key.includes('size')
    let isRatio = key.includes('ratio')
    let isEasing = key.includes('ease')
    let isZIndex= key.includes('layer')
    let isImage = key.includes('gradient')
    let isColor = colors.some(color => key.includes(color))

    if      (isLength) syntax = 'dimension'
    else if (isEasing) syntax = 'cubic-bezier'
    else if (isColor)  syntax = 'color'
    else if (isRatio)  syntax = 'ratio'
    else if (isImage)  syntax = 'image'
    else if (isZIndex)  syntax = 'number'

    return {
      name: key,
      syntax: `<${syntax}>`,
      initialValue: token,
      inherits: false,
    }
  })