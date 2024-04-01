export const CustomMedia = {
  "--motionOK": "(prefers-reduced-motion: no-preference)",
  "--motionNotOK": "(prefers-reduced-motion: reduce)",
  "--opacityOK": "(prefers-reduced-transparency: no-preference)",
  "--opacityNotOK": "(prefers-reduced-transparency: reduce)",
  "--useDataOK": "(prefers-reduced-data: no-preference)",
  "--useDataNotOK": "(prefers-reduced-data: reduce)",

  "--OSdark": "(prefers-color-scheme: dark)",
  "--OSlight": "(prefers-color-scheme: light)",

  "--highContrast": "(prefers-contrast: more)",
  "--lowContrast": "(prefers-contrast: less)",

  "--invertedColors": "(inverted-colors: inverted)",
  "--forcedColors": "(forced-colors: active)",

  "--portrait": "(orientation: portrait)",
  "--landscape": "(orientation: landscape)",

  "--HDcolor": "(dynamic-range: high) or (color-gamut: p3)",

  "--touch": "(hover: none) and (pointer: coarse)",
  "--stylus": "(hover: none) and (pointer: fine)",
  "--pointer": "(hover) and (pointer: coarse)",
  "--mouse": "(hover) and (pointer: fine)",

  "--xxs-only": "(0px <= width < 240px)",
  "--xxs-n-above": "(width >= 240px)",
  "--xxs-n-below": "(width < 240px)",
  "--xxs-phone": "(--xxs-only) and (--portrait)",

  "--xs-only": "(240px <= width < 360px)",
  "--xs-n-above": "(width >= 360px)",
  "--xs-n-below": "(width < 360px)",
  "--xs-phone": "(--xs-only) and (--portrait)",

  "--sm-only": "(360px <= width < 480px)",
  "--sm-n-above": "(width >= 480px)",
  "--sm-n-below": "(width < 480px)",
  "--sm-phone": "(--sm-only) and (--portrait)",

  "--md-only": "(480px <= width < 768px)",
  "--md-n-above": "(width >= 768px)",
  "--md-n-below": "(width < 768px)",
  "--md-phone": "(--md-only) and (--portrait)",

  "--lg-only": "(768px <= width < 1024px)",
  "--lg-n-above": "(width >= 1024px)",
  "--lg-n-below": "(width < 1024px)",
  "--lg-phone": "(--lg-only) and (--portrait)",

  "--xl-only": "(1024px <= width < 1440px)",
  "--xl-n-above": "(width >= 1440px)",
  "--xl-n-below": "(width < 1440px)",

  "--xxl-only": "(1440px <= width < 1920px)",
  "--xxl-n-above": "(width >= 1920px)",
  "--xxl-n-below": "(width < 1920px)",
}