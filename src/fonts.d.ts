import { DashDashKebabToCamelCase } from "./dashDashKebabToCamelCase";
import Fonts from '../types/props.fonts'

type CamelCase = {[K in keyof typeof Fonts as DashDashKebabToCamelCase<K>]: typeof Fonts[K]}

declare const fonts: CamelCase & typeof Fonts

export default fonts