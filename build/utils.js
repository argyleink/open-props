export const camelize = text => {
  text = text.replace(/[-]+(.)?/g, (_, c) => c 
    ? c.toUpperCase() 
    : '')
  return text.slice(0, 1).toLowerCase() + text.slice(1)
}

export const mapToObjectNotation = props => {
  for (const prop in props)
    props[camelize(prop)] = props[prop]
  return props
}