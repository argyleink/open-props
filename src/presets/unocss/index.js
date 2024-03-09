import Colors from "../../../src/props.colors.js";
import Fonts from "../../../src/props.fonts.js";

export const openPropsPreset = {
  name: "unocss-preset-open-props",
  rules: [
    [
      /^op-color-(.*)$/,
      ([, token], { theme }) => {
        const normalizedVariable = `--${token}`;
        if (theme["colors"][normalizedVariable]) {
          return { color: theme["colors"][normalizedVariable] };
        }
      },
    ],
    [
      /^op-font-(.*)$/,
      ([, token], { theme }) => {
        const normalizedVariable = `--font-${token}`;
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
