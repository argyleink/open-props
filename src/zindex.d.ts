import { DashDashKebabToCamelCase } from "./dashDashKebabToCamelCase";
import Zindex from '../types/props.zindex'

type CamelCase = {[K in keyof typeof Zindex as DashDashKebabToCamelCase<K>]: typeof Zindex[K]}

declare const zindex: CamelCase & typeof Zindex

export default zindex