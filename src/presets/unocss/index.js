import Colors from "../../../src/props.colors.js";
import Fonts from "../../../src/props.fonts.js";

export const openPropsPreset = {
  name: "unocss-preset-open-props",
  rules: [
    [
      /^op-color-(.*)$/,
      ([, c], { theme }) => {
        const normalizedVariable = `--${c}`;
        if (theme["colors"][normalizedVariable]) {
          return { color: theme["colors"][normalizedVariable] };
        }
      },
    ],
    [
      /^op-font-(.*)$/,
      ([, c], { theme }) => {
        const normalizedVariable = `--font-${c}`;
        if (theme["fontFamily"][normalizedVariable]) {
          return { "font-family": theme["fontFamily"][normalizedVariable] };
        }
      },
    ],
  ],
  theme: {
    colors: Colors,
    fontFamily: Fonts,
  },
};
