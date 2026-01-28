import Color from 'colorjs.io'

/**
 * Split by character like space or comma ignoring internals of functions
 */
const splitBy = (value, separator) => {
  const parts = [];
  let currentPart = "";
  let depth = 0;
  for (const character of value) {
    if (character === "(") {
      depth += 1;
    } else if (character === ")") {
      depth -= 1;
    } else if (
      depth === 0 &&
      currentPart &&
      (character === separator || character.match(separator))
    ) {
      parts.push(currentPart.trim());
      currentPart = "";
      continue;
    }
    currentPart += character;
  }
  if (currentPart.trim()) {
    parts.push(currentPart.trim());
  }
  return parts;
};


const colorSpaceBySpaceId = {
  "p3": "display-p3",
  "a98rgb": "a98-rgb",
  "prophoto": "prophoto-rgb",
}

const parseNumber = (input) => {
  if (typeof input === 'number') {
    return {
      $type: 'number',
      $value: input
    }
  }
  const value = Number(input)
  if (!Number.isNaN(value)) {
    return {
      $type: 'number',
      $value: value
    }
  }
}


const parseColorValue = (input) => {
  try {
    const color = new Color(input);
    const value = {
      colorSpace: colorSpaceBySpaceId[color.spaceId] ?? color.spaceId,
      components: color.coords,
    };
    // Only add alpha if not fully opaque
    if (color.alpha !== 1) {
      value.alpha = color.alpha;
    }
    // serializing to hex works only for srgb color space
    if (color.spaceId === "srgb") {
      value.hex = color.toString({ format: 'hex' });
    }
    return value;
  } catch (error) {
    return;
  }
};


const parseColor = (input) => {
  const colorValue = parseColorValue(input)
  if (colorValue) {
    return {
      $type: 'color',
      $value: colorValue
    }
  }
};

const parseDimensionValue = (input, unitlessZero) => {
  if (unitlessZero && input === "0") {
    return {
      value: 0,
      unit: "px",
    };
  }
  let match = input.match(/^([\-\d.e]+)(px|rem|em)$/);
  if (!match) {
    return;
  }
  return {
    value: Number.parseFloat(match[1]),
    unit: match[2] === 'em' ? 'rem' : match[2],
  };
};



const parseDimension = (input) => {
  const dimensionValue = parseDimensionValue(input)
  if (dimensionValue) {
    return {
      $type: 'dimension',
      $value: dimensionValue
    }
  }
};

const parseRatio = (input) => {
  // 16 / 9
  const match = input.match(/^([\d.-e]+)\s*\/\s*([\d.-e]+)$/);
  if (!match) {
    return;
  }
  return {
    $type: 'number',
    $description: input,
    $value: Number.parseFloat(match[1]) / Number.parseFloat(match[2]),
  };
};


const parseCubicBezier = (value) => {
  const match = value.match(
    /^cubic-bezier\(\s*([\d.-]+)\s*,\s*([\d.-]+)\s*,\s*([\d.-]+)\s*,\s*([\d.-]+)\s*\)$/,
  );
  if (match) {
    return {
      $type: 'cubicBezier',
      $value: [
        Number.parseFloat(match[1]),
        Number.parseFloat(match[2]),
        Number.parseFloat(match[3]),
        Number.parseFloat(match[4]),
      ]
    }
  }
};

const parseVariable = (value) => {
  const match = value.match(/^var\(--([a-zA-Z0-9_-]+)\)$/);
  if (match) {
    const [groupName, ...tokenNameParts] = match[1].split('-')
    const tokenName = tokenNameParts.join('-')
    return {
      $value: `{${groupName}.${tokenName}}`
    };
  }
};

const parseShadowItem = (value) => {
  const parts = splitBy(value, /\s+/);
  const inset = parts.some((part) => part === "inset");
  const color = parts
    .map((part) => parseVariable(part) ?? parseColorValue(part))
    .filter((item) => item !== undefined)
    .at(0);
  const dimensions = parts
    .map(item => parseDimensionValue(item, true))
    .filter((item) => item !== undefined);
  const offsetX = dimensions.at(0);
  const offsetY = dimensions.at(1);
  const blur = dimensions.at(2);
  const spread = dimensions.at(3);
  if (!offsetX || !offsetY) {
    return;
  }
  const shadow = {
    color: color ?? { colorSpace: "srgb", components: [0, 0, 0] },
    offsetX,
    offsetY,
    blur: blur ?? { value: 0, unit: "px" },
    spread: spread ?? { value: 0, unit: "px" },
  };
  if (inset) {
    shadow.inset = true;
  }
  return shadow;
};

const parseShadow = (value) => {
  // Handle multiple shadows separated by commas (not inside functions)
  const shadows = splitBy(value, ",");
  const parsedShadows = shadows
    .map(parseShadowItem)
    .filter((item) => item !== undefined);
  if (parsedShadows.length === 0) {
    return;
  }
  return {
    $type: "shadow",
    $value: parsedShadows.length === 1 ? parsedShadows[0] : parsedShadows,
  };
};



const parseFontWeight = (value) => {
  // Try font-weight detection (1-1000, but only specific common values)
  const match = String(value).match(/^(\d+)$/);
  if (match) {
    const weight = Number.parseInt(match[1], 10);
    // Only treat as font-weight if it's a common weight value
    if (weight >= 100 && weight <= 900 && weight % 100 === 0) {
      return {
        $type: "fontWeight",
        $value: weight,
      };
    }
  }
};


const parseFontFamily = (value) => {
  // Try font-family detection (contains commas outside of functions, or quotes)
  // Check for commas but make sure they're not inside functions like cubic-bezier()
  if (value.includes('"') || value.includes("'")) {
    const families = value
      .split(",")
      .map((f) => f.trim().replace(/^["']|["']$/g, ""));
    if (families.length > 1) {
      return {
        $type: "fontFamily",
        $value: families,
      };
    } else if (families.length === 1) {
      return {
        $type: "fontFamily",
        $value: families[0],
      };
    }
  }
  // Check for commas, but only if not part of a function
  if (value.includes(",") && !value.includes("(")) {
    const families = value
      .split(",")
      .map((f) => f.trim().replace(/^["']|["']$/g, ""));
    if (families.length > 1) {
      return {
        $type: "fontFamily",
        $value: families,
      };
    }
  }
};


const excludedPrefixes = [
  // clamp()
  '--radius-conditional',
  // full border radius
  '--radius-blob',
  '--radius-drawn',
  // filters and urls
  '--noise',
  // complex gradient functions with oklab hack
  '--gradient',
  // linear()
  '--ease-bounce',
  '--ease-spring',
  // steps()
  '--ease-step',
  // ch
  '--size-relative',
  '--size-header',
  '--size-content',
  // clamp()
  '--size-fluid',
  '--font-size-fluid'
];

export const toResolver = (props) => {
  const openPropsSource = {}

  for (const [key, input] of props) {
    if (excludedPrefixes.some(prefix => key.startsWith(prefix))) {
      continue;
    }
    const value =
      parseFontWeight(input) ??
      parseNumber(input) ??
      parseColor(input) ??
      parseDimension(input) ??
      parseRatio(input) ??
      parseCubicBezier(input) ??
      parseVariable(input) ??
      parseShadow(input) ??
      parseFontFamily(input);
    let [groupName, ...tokenNameParts] = key.slice(2).split('-')
    // inner, shadow-0 -> inner-shadow, 0
    if (key.startsWith('--inner-shadow')) {
      groupName = 'inner-shadow'
      tokenNameParts = tokenNameParts.slice(1)
    }
    const tokenName = tokenNameParts.join('-')
    if (value) {
      // strip leading --
      openPropsSource[groupName] ??= {}
      openPropsSource[groupName][tokenName] = value
    } else {
      console.error(`Cannot parse ${key}: ${input}`)
    }
  }

  return {
    "version": "2025.10",
    "name": "Open Props",
    "description": "CSS custom properties to help accelerate adaptive and consistent design.",
    "resolutionOrder": [
      {
        "type": "set",
        "name": "Open Props",
        "sources": [
          openPropsSource
        ]
      }
    ]
  }
}
