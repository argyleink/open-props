export const toJSON = props =>
  Object.entries(props)
    .reduce((bundle_entries, [key, val]) => {
      bundle_entries.unshift([key,val])
      return bundle_entries
    }, [])