import { DashDashKebabToCamelCase } from "./dashDashKebabToCamelCase";
import ColorsHsl from '../types/props.colors-hsl'

type CamelCase = {[K in keyof typeof ColorsHsl as DashDashKebabToCamelCase<K>]: typeof ColorsHsl[K]}

declare const colorsHsl: CamelCase & typeof ColorsHsl

export default colorsHsl