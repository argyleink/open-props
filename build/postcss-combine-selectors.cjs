const creator = () => {
  return {
    postcssPlugin: 'postcss-combine-selectors',
    OnceExit(root) {
      const rulesToCombine = new Map()
      
      root.walkRules(rule => {
        if (isKeyframesRule(rule)) {
          return
        }
        
        const key = ruleKey(rule)
        const existing = rulesToCombine.get(key)
        
        // Existing group:
        // - add rule to the group
        if (existing) {
          existing.rules.push(rule)
          return
        }
        
        // New group:
        // - first rule is the one we're going to combine into
        // - create an empty slice for other rules to be added to
        rulesToCombine.set(key, {
          first: rule,
          rules: []
        })
      })
      
      // Iterate over all groups
      for (const { first, rules } of rulesToCombine.values()) {
        // If there was only one rule for a given group, there's nothing to combine
        if (rules.length === 0) {
          continue
        }
        
        // Append all contents of all subsequent rules to the first rule
        for (const rule of rules) {
          rule.each((child) => {
            child.remove()
            first.append(child)
          })
          
          // Remove the now-empty rule
          rule.remove()
        }
      }
    },
  }
}

/**
* Construct a key that is specific to the AST ancestry of the rule.
* Only rules with the same key can be combined.
* 
* @param {import('postcss').Rule} rule
* @returns {string}
*/
function ruleKey(rule) {
  let key = `[rule ${rule.selector}]`
  
  let ancestor = rule.parent
  while (ancestor) {
    if (ancestor.type === 'atrule') {
      key = `[${ancestor.name} ${ancestor.params}]${key}`
    } else if (ancestor.type === 'rule') {
      key = `[rule ${ancestor.selector}]${key}`
    } else if (ancestor.type === 'root') {
      break
    }
    
    ancestor = ancestor.parent
  }
  
  return key
}

function isKeyframesRule(rule) {
  if (rule.parent?.type === 'atrule' && rule.parent.name === 'keyframes') {
    return true
  }
  
  return false
}

module.exports = creator
module.exports.postcss = true
