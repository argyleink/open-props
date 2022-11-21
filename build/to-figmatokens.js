import * as Colors from '../src/props.colors.js'

export const toFigmaTokens = props => {
  const figmatokens = {}

  props.map(([key, token]) => {
    let meta = {}

    let isLength = key.includes('size') && !key.includes('border-size')
    let isBorder = key.includes('border-size')
    let isRadius = key.includes('radius')
    let isShadow = key.includes('shadow')
    let colors = Object.keys(Colors)
      .filter(exportName => exportName !== "default")
      .map(hueName => hueName.toLowerCase())
    let isColor = colors.some(color => key.includes(color))
    
    if      (isLength) meta.type = 'sizing'
    else if (isBorder) meta.type = 'borderWidth'
    else if (isRadius) meta.type = 'borderRadius'
    else if (isShadow) meta.type = 'boxShadow'
    else if (isColor)  meta.type = 'color'
    else               meta.type = 'other'

    if (!(meta.type in figmatokens)) figmatokens[meta.type] = {}
    
    if (isColor) {
      let color = /--(.+?)-/.exec(key)[1]
      if (!(color in figmatokens[meta.type])) figmatokens[meta.type][color] = {}
      figmatokens[meta.type][color][key] = {
        value: token,
        ...meta,
      }
    } else {
      figmatokens[meta.type][key] = {
        value: token,
        ...meta,
      }
    }
  })

  return figmatokens
}