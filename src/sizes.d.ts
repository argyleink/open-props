import { DashDashKebabToCamelCase } from "./dashDashKebabToCamelCase";
import Sizes from '../types/props.sizes'

type CamelCase = {[K in keyof typeof Sizes as DashDashKebabToCamelCase<K>]: typeof Sizes[K]}

declare const sizes: CamelCase & typeof Sizes

export default sizes