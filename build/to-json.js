export const toJSON = props =>
  Object.entries(props)
    .reduce((bundle_entries, [key, val]) => {
      if (key === '*') {
        Object.entries(val).forEach(token => {
          bundle_entries.unshift(token)
        })
      }
      else 
        bundle_entries.unshift([key,val])

      return bundle_entries
    }, [])