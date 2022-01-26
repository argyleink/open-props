export const flattenMixins = list => {
  let entries = Object.entries(list)

  let flat = entries.reduce((bundle_entries, [key, val]) => {
    if (key === '*') {
      Object.entries(val).forEach(token => {
        bundle_entries.unshift(token)
      })
    }
    else 
      bundle_entries.unshift([key,val])

    return bundle_entries
  }, [])

  return Object.fromEntries(flat)
}