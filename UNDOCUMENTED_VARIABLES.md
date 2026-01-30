# Undocumented CSS Variables in Open Props

This document lists all CSS variables defined in the source files that are not currently documented in the docsite (`docsite/index.html`).

## Summary

- **Total undocumented variables from main src/**: ~320
- **Total undocumented variables from src/extra/**: ~75

---

## Main Source Files (`src/`)

### 1. Animations (10 variables)

These animations exist but aren't shown in the animations documentation:

| Variable | Source File |
|----------|-------------|
| `--animation-fade-in-bloom` | props.animations.css |
| `--animation-fade-out-bloom` | props.animations.css |
| `--animation-scale-up` | props.animations.css |
| `--animation-shake-x` | props.animations.css |
| `--animation-shake-z` | props.animations.css |
| `--animation-slide-in-down` | props.animations.css |
| `--animation-slide-in-right` | props.animations.css |
| `--animation-slide-out-left` | props.animations.css |
| `--animation-slide-out-right` | props.animations.css |
| `--animation-slide-out-up` | props.animations.css |

### 2. HSL Color Variants (246 variables)

All colors have HSL variants (e.g., `--blue-5-hsl`) that allow custom alpha manipulation. These are not documented:

**Colors with undocumented HSL variants:**
- Blue: `--blue-0-hsl` through `--blue-12-hsl`
- Brown: `--brown-0-hsl` through `--brown-12-hsl`
- Camo: `--camo-0-hsl` through `--camo-12-hsl`
- Choco: `--choco-0-hsl` through `--choco-12-hsl`
- Cyan: `--cyan-0-hsl` through `--cyan-12-hsl`
- Gray: `--gray-0-hsl` through `--gray-12-hsl`
- Green: `--green-0-hsl` through `--green-12-hsl`
- Indigo: `--indigo-0-hsl` through `--indigo-12-hsl`
- Jungle: `--jungle-0-hsl` through `--jungle-12-hsl`
- Lime: `--lime-0-hsl` through `--lime-12-hsl`
- Orange: `--orange-0-hsl` through `--orange-12-hsl`
- Pink: `--pink-0-hsl` through `--pink-12-hsl`
- Purple: `--purple-0-hsl` through `--purple-12-hsl`
- Red: `--red-0-hsl` through `--red-12-hsl`
- Sand: `--sand-0-hsl` through `--sand-12-hsl`
- Stone: `--stone-0-hsl` through `--stone-12-hsl`
- Teal: `--teal-0-hsl` through `--teal-12-hsl`
- Violet: `--violet-0-hsl` through `--violet-12-hsl`
- Yellow: `--yellow-0-hsl` through `--yellow-12-hsl`

**Usage example:**
```css
/* Use HSL variant to add custom alpha */
.card {
  background: hsl(var(--blue-5-hsl) / 50%);
}
```

### 3. Easing Functions (9 variables)

| Variable | Source File |
|----------|-------------|
| `--ease-elastic-1` | props.easing.css |
| `--ease-elastic-2` | props.easing.css |
| `--ease-elastic-3` | props.easing.css |
| `--ease-elastic-4` | props.easing.css |
| `--ease-elastic-5` | props.easing.css |
| `--ease-squish-1` | props.easing.css |
| `--ease-squish-2` | props.easing.css |
| `--ease-squish-4` | props.easing.css |
| `--ease-squish-5` | props.easing.css |

Note: `--ease-squish-3` is documented but the other squish variants are not.

### 4. Typography (1 variable)

| Variable | Source File |
|----------|-------------|
| `--font-serif` | props.fonts.css |

### 5. Gradients (1 variable)

| Variable | Source File |
|----------|-------------|
| `--gradient-space` | props.gradients.css |

### 6. Extended Grays (3 variables)

The OKLCH gray palette extends to 15, but only 0-12 are documented:

| Variable | Source File |
|----------|-------------|
| `--gray-13` | props.gray-oklch.css |
| `--gray-14` | props.gray-oklch.css |
| `--gray-15` | props.gray-oklch.css |

### 7. Grid/Layouts (12 variables)

These layout utilities are not documented:

| Variable | Source File |
|----------|-------------|
| `--grid-cell` | props.layouts.css |
| `--grid-cell-name` | props.layouts.css |
| `--grid-ram` | props.layouts.css |
| `--grid-holy-grail` | props.layouts.css |
| `--grid_adapt_mixin` | props.layouts.css |
| `--grid_adapt_mixin-viewport_context` | props.layouts.css |
| `--grid_adapt_mixin-container_context` | props.layouts.css |
| `--grid_adapt_mixin-context` | props.layouts.css |
| `--grid_adapt_mixin-break_1` | props.layouts.css |
| `--grid_adapt_mixin-break_2` | props.layouts.css |
| `--above-break_1-columns` | props.layouts.css |
| `--above-break_2-columns` | props.layouts.css |

### 8. Highlights (3 variables)

| Variable | Source File |
|----------|-------------|
| `--highlight` | props.highlights.css |
| `--highlight-color` | props.highlights.css |
| `--highlight-size` | props.highlights.css |

### 9. Z-Index Layers (4 variables)

Only `--layer-1` and `--layer-important` are documented:

| Variable | Source File |
|----------|-------------|
| `--layer-2` | props.zindex.css |
| `--layer-3` | props.zindex.css |
| `--layer-4` | props.zindex.css |
| `--layer-5` | props.zindex.css |

### 10. Shadows (10 variables)

| Variable | Source File |
|----------|-------------|
| `--inner-shadow-highlight` | props.shadows.css |
| `--shadow-color` | props.shadows.css |
| `--shadow-strength` | props.shadows.css |
| `--shadow-strength-3` | props.shadows.css |
| `--shadow-strength-4` | props.shadows.css |
| `--shadow-strength-5` | props.shadows.css |
| `--shadow-strength-6` | props.shadows.css |
| `--shadow-strength-7` | props.shadows.css |
| `--shadow-strength-8` | props.shadows.css |
| `--shadow-strength-10` | props.shadows.css |

### 11. Sizes (6 variables)

Named size aliases that are not documented:

| Variable | Source File |
|----------|-------------|
| `--size-xxs` | props.sizes.css |
| `--size-xs` | props.sizes.css |
| `--size-sm` | props.sizes.css |
| `--size-md` | props.sizes.css |
| `--size-lg` | props.sizes.css |
| `--size-xl` | props.sizes.css |
| `--size-xxl` | props.sizes.css |

### 12. Border Radius (6 variables)

| Variable | Source File |
|----------|-------------|
| `--radius-6` | props.borders.css |
| `--radius-conditional-1` | props.borders.css |
| `--radius-conditional-2` | props.borders.css |
| `--radius-conditional-4` | props.borders.css |
| `--radius-conditional-5` | props.borders.css |
| `--radius-conditional-6` | props.borders.css |

Note: `--radius-conditional-3` is documented but others are not.

### 13. Noise Textures (2 variables)

| Variable | Source File |
|----------|-------------|
| `--noise-2` | props.gradients.css |
| `--noise-4` | props.gradients.css |

Note: `--noise-1`, `--noise-3`, and `--noise-5` are documented.

### 14. Squircles (3 variables)

SVG-based squircle shapes for backgrounds:

| Variable | Source File |
|----------|-------------|
| `--squircle-1` | props.svg.css |
| `--squircle-2` | props.svg.css |
| `--squircle-3` | props.svg.css |

### 15. OKLCH Palette Variables (2 variables)

Dynamic color palette variables:

| Variable | Source File |
|----------|-------------|
| `--color-0` | props.colors-oklch.css |
| `--color-bright` | props.colors-oklch.css |

Note: `--color-1` through `--color-16` are documented in the palette section.

### 16. LTR/RTL Direction (2 variables)

| Variable | Source File |
|----------|-------------|
| `--isLTR` | props.supports.css |
| `--isRTL` | props.supports.css |

**Usage example:**
```css
/* Flip transforms based on text direction */
.icon {
  transform: scaleX(var(--isLTR));
}
```

---

## Extra Source Files (`src/extra/`)

### 17. Durations (60+ variables)

Fun and practical time-based duration variables in `durations.css`:

**Practical durations:**
| Variable | Description |
|----------|-------------|
| `--duration-instant` | Immediate |
| `--duration-quick-1` | Quick 1 |
| `--duration-quick-2` | Quick 2 |
| `--duration-moderate-1` | Moderate 1 |
| `--duration-moderate-2` | Moderate 2 |
| `--duration-gentle-1` | Gentle 1 |
| `--duration-gentle-2` | Gentle 2 |

**Short moments:**
| Variable | Description |
|----------|-------------|
| `--jiffy` | Very brief |
| `--moment` | Brief moment |
| `--pause` | Short pause |
| `--sneeze` | Time to sneeze |
| `--blink` | Blink of an eye |
| `--flinch` | Quick flinch |
| `--atom` | Atomic moment |

**Time units:**
| Variable | Description |
|----------|-------------|
| `--minute` | 60 seconds |
| `--hour` | 60 minutes |
| `--day` | 24 hours |
| `--week` | 7 days |
| `--month` | ~30 days |
| `--year` | 365 days |
| `--decade` | 10 years |
| `--generation` | ~25 years |
| `--lifetime` | ~80 years |
| `--work-day` | 8 hours |
| `--work-week` | 40 hours |

**Astronomical:**
| Variable | Description |
|----------|-------------|
| `--lunar-month` | ~29.5 days |
| `--mars-year` | ~687 days |
| `--venus-year` | ~225 days |
| `--sol` | Mars day |
| `--sidereal-day` | 23h 56m 4s |
| `--iss-orbit` | ~92 minutes |

**Fun/Pop culture:**
| Variable | Description |
|----------|-------------|
| `--friedman` | 6 months (Friedman unit) |
| `--scaramucci` | ~11 days |
| `--kovac` | Named duration |
| `--wolverton` | Named duration |
| `--kermit` | Named duration |
| `--clarke` | Named duration |
| `--martin` | Named duration |

**Historical:**
| Variable | Description |
|----------|-------------|
| `--fortnight` | 14 days |
| `--lustre` | 5 years |
| `--olympiad` | 4 years |
| `--nundine` | 8 days |
| `--quinzieme` | 15 days |
| `--quadrant` | 6 hours |

### 18. Theme/Normalize Variables (13 variables)

Variables used in normalize/theme extras (may be intentionally internal):

| Variable | Source File |
|----------|-------------|
| `--surface-1` | normalize.css, theme.css |
| `--surface-2` | normalize.css, theme.css |
| `--surface-3` | normalize.css, theme.css |
| `--surface-4` | normalize.css, theme.css |
| `--text-1` | normalize.css, theme.css |
| `--text-2` | normalize.css, theme.css |
| `--link` | normalize.css, theme.css |
| `--link-visited` | normalize.css, theme.css |
| `--scrollthumb-color` | normalize.css |
| `--nice-inner-radius` | normalize.css |
| `--brand` | theme.css |

---

## Recommendations

### High Priority (Commonly Useful)
1. **HSL Color Variants** - Very useful for opacity control, should be documented with usage examples
2. **Animations** - Missing 10 animations that exist in the source
3. **Easing** - Elastic and squish variants
4. **Named Sizes** - `--size-xs`, `--size-sm`, `--size-md`, `--size-lg`, `--size-xl` are intuitive and useful
5. **Squircles** - Unique feature that should be showcased
6. **Grid/Layouts** - Useful utilities

### Medium Priority
1. **Extended Grays** - `--gray-13` through `--gray-15`
2. **Z-Index Layers** - Full set of layers
3. **Shadow customization** - `--shadow-color`, `--shadow-strength` variants
4. **Highlights** - Full highlight system
5. **Noise textures** - Complete the noise set

### Lower Priority (Niche/Fun)
1. **Durations** - Fun but niche, could be in an "extras" section
2. **LTR/RTL** - Advanced use case
3. **Conditional radius** - Edge case utility
4. **OKLCH palette vars** - Already partially covered

### Possibly Intentionally Undocumented
1. Theme/normalize internal variables (prefixed with `_` or context-specific)
2. Grid mixin internals (complex implementation details)
