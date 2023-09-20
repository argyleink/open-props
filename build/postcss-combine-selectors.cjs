const creator = () => {

	return {
		postcssPlugin: 'postcss-combine-selectors',
		Once(root) {
			const rulesToCombine = new Map();

			root.walkRules(rule => {
				if (isKeyFrameRule(rule)) {
					return;
				}

				const key = ruleKey(rule);
				const existing = rulesToCombine.get(key);
				if (existing) {
					existing.rules.push(rule);
					return;
				}

				rulesToCombine.set(key, {
					first: rule,
					rules: [rule]
				});
			});

			for (const { first, rules } of rulesToCombine.values()) {
				if (rules.length === 1) {
					continue;
				}

				for (let i = 0; i < rules.length; i++) {
					const rule = rules[i];
					
					if (rule === first) {
						continue;
					}

					rule.remove();

					for (const decl of rule.nodes) {
						first.append(decl);
					}
				}
			}
		},
	};
};

function ruleKey(rule) {
	let key = `[rule ${rule.selector}]`;

	let ancestor = rule.parent;
	while (ancestor) {
		if (ancestor.type === 'atrule') {
			key = `[${ancestor.name} ${ancestor.params}]${key}`;
		} else if (ancestor.type === 'rule') {
			key = `[rule ${ancestor.selector}]${key}`;
		} else if (ancestor.type === 'root') {
			break;
		}

		ancestor = ancestor.parent;
	}

	return key;
}

function isKeyFrameRule(rule) {
	if (rule.parent?.type === 'atrule' && rule.parent.name === 'keyframes') {
		return true;
	}

	return false;
}

module.exports = creator;
module.exports.postcss = true;
