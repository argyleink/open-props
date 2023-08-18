import * as Colors from '../src/props.colors.js'

export const toTokens = props => 
  props.map(([key, token]) => {
    let meta = {}

    let isLength = key.includes('size')
    let isEasing = key.includes('ease')
    let colors = Object.keys(Colors)
      .filter(exportName => exportName !== "default")
      .map(hueName => hueName.toLowerCase())
    let isColor = colors.some(color => key.includes(color))

    if      (isLength) meta.$type = 'dimension'
    else if (isEasing) meta.$type = 'cubic-bezier'
    else if (isColor)  meta.$type = 'color'

    return [key, {
      $value: token,
      ...meta,
    }]
  })