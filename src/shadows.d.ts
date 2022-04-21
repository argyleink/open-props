import { DashDashKebabToCamelCase } from "./dashDashKebabToCamelCase";
import Shadows from '../types/props.shadows'

type CamelCase = {[K in keyof typeof Shadows as DashDashKebabToCamelCase<K>]: typeof Shadows[K]}

declare const shadows: CamelCase & typeof Shadows

export default shadows