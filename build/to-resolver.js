import Color from 'colorjs.io'


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



const parseColor = (input) => {
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
    value.hex = input;
    return {
      $type: 'color',
      $value: value
    };
  } catch (error) {
    return;
  }
};


const parseDimension = (input) => {
  const match = input.match(/^([\-\d.e]+)(px|rem)$/);
  if (!match) {
    return;
  }
  return {
    $type: 'dimension',
    $value: {
      value: Number.parseFloat(match[1]),
      unit: match[2],
    }
  };
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
    return {
      $value: `{${match[1]}}`
    };
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
];

export const toResolver = (props) => {
  const openPropsSource = {}

  for (const [key, input] of props) {
    if (excludedPrefixes.some(prefix => key.startsWith(prefix))) {
      continue;
    }
    const value =
      parseNumber(input) ??
      parseColor(input) ??
      parseDimension(input) ??
      parseRatio(input) ??
      parseCubicBezier(input) ??
      parseVariable(input);
    if (value) {
      // strip leading --
      openPropsSource[key.slice(2)] = value
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
