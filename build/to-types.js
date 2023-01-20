import Animations from '../src/props.animations.js'
import Sizes from '../src/props.sizes.js'
import Colors from '../src/props.colors.js'
import ColorsHSL from '../src/props.colors-hsl.js'
import Fonts from '../src/props.fonts.js'
import Borders from '../src/props.borders.js'
import Aspects from '../src/props.aspects.js'
import Easings from '../src/props.easing.js'
import Gradients from '../src/props.gradients.js'
import Shadows from '../src/props.shadows.js'
import SVG from '../src/props.svg.js'
import Zindex from '../src/props.zindex.js'
import MaskEdges from '../src/props.masks.edges.js'
import MaskCornerCuts from '../src/props.masks.corner-cuts.js'

import {mapToObjectNotation} from './utils.js'

const mapTypes = collection =>
  Object.fromEntries(Object.entries(collection)
    .map(([key, val]) => 
      [key, typeof val]))

export const toTypes = (ts_types = false) => {
  return mapToObjectNotation({
    ...mapTypes(Animations),
    ...mapTypes(Sizes),
    ...mapTypes(Colors),
    ...mapTypes(ColorsHSL),
    ...mapTypes(Fonts),
    ...mapTypes(Borders),
    ...mapTypes(Aspects),
    ...mapTypes(Easings),
    ...mapTypes(SVG),
    ...mapTypes(Gradients),
    ...mapTypes(Shadows),
    ...mapTypes(Zindex),
    ...mapTypes(MaskEdges),
    ...mapTypes(MaskCornerCuts),
  })
}