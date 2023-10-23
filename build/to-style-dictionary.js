import * as Colors from '../src/props.colors.js'

const dictionaryMap = {
  "size-relative":       "relative",
  "size-fluid":          "fluid",
  "size-header":         "header",
  "size-content":        "content",
  "border-size":         "size",
  "radius-conditional":  "conditional",
  "radius-blob":         "blob"
};

const mapToDictionaryKey = (value) => dictionaryMap[value] || value;

const getTypeKey = (metaType) => {
  if (metaType === "size" || metaType === "border-radius") {
    return metaType === "size" ? "size" : "radius"
  } else if (metaType === "border-width") {
    return "border"
  }
  return metaType
};

const countOccurrences = (str, letter) => (str.match(new RegExp(letter, 'g')) || []).length;

const cssVarUsageRegex = /var\(--([a-zA-Z0-9-]+)\)/g

/* https://www.30secondsofcode.org/js/s/replace-last-occurrence/ */
const replaceLast = (str, pattern, replacement) => {
  const match =
    typeof pattern === 'string'
      ? pattern
      : (str.match(new RegExp(pattern.source, 'g')) || []).slice(-1)[0]
  if (!match) return str
  const last = str.lastIndexOf(match)
  return last !== -1
    ? `${str.slice(0, last)}${replacement}${str.slice(last + match.length)}`
    : str
};

const cssVarToTokenReference = (input) => {
  if (input.toString().indexOf("var") !== -1) {

    return input.replace(cssVarUsageRegex, (match, variableName) => {
      if (countOccurrences(variableName, '-') > 1) {
        const varParts = replaceLast(variableName, '-', '.');
        return `{${varParts}.value}`;
      }
      return `{${variableName.replace("-", ".")}.value}`;
    });
  }
  return input;
};

const createTokenObject = ({
  baseObj,
  mainKey,
  metaType,
  dictionarykey,
  index,
  token
}) => {
  // Determine if the main key should be handled separately
  const shouldHandleMainKey = mainKey !== dictionarykey
  // Determine the type key based on metaType
  const typeKey = getTypeKey(metaType)

  // Initialize the typeKey in the baseObj if it doesn't exist
  baseObj[typeKey] = baseObj[typeKey] || {}
  // Define the target object
  const targetObj = baseObj[typeKey]

  if(typeKey === "size" || typeKey === "radius") {
    if(shouldHandleMainKey){
      // Handle main key separately
      targetObj[dictionarykey] = targetObj[dictionarykey] || {}
      targetObj[dictionarykey][index] = {
        value: token,
        type: metaType
      }
    } else {
      // Handle main key directly
      targetObj[index] = {
        value: token,
        type: metaType
      }
    }
  } else {
    // Handle all other types
    targetObj[dictionarykey] = targetObj[dictionarykey] || {}
    targetObj[dictionarykey][index] = {
      value: token,
      type: metaType
    }
  }

  return baseObj
};

export const toStyleDictionary = props => {
  const styledictionarytokens = {}

  const colors = Object.keys(Colors)
        .filter(exportName => exportName !== "default")
        .map(hueName => hueName.toLowerCase())

  props.forEach(([key, token]) => {
    const meta = {}

    const isLength = key.includes('size') && !key.includes('border-size')
    const isBorder = key.includes('border-size')
    const isRadius = key.includes('radius')
    const isShadow = key.includes('shadow')
    const isColor = colors.some(color => key.includes(color))

    if      (isLength) meta.type = 'size'
    else if (isBorder) meta.type = 'border-width'
    else if (isRadius) meta.type = 'border-radius'
    else if (isShadow) meta.type = 'box-shadow'
    else if (isColor)  meta.type = 'color'
    else               meta.type = 'other'

    const keyWithoutPrefix = key.replace('--', '')
    const keyParts = keyWithoutPrefix.split('-')
    const mainKey = keyParts.length > 1 ? keyParts.slice(0, -1).join('-') : keyParts[0]
    const index = keyParts.length > 1 ? keyParts[keyParts.length - 1] : 0

    const dictionarykey = mapToDictionaryKey(mainKey)

    createTokenObject({
      baseObj: styledictionarytokens,
      mainKey: mainKey,
      metaType: meta.type,
      dictionarykey: dictionarykey,
      index: index,
      token: cssVarToTokenReference(token)
    })
  })

  return styledictionarytokens
}