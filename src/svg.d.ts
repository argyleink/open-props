import { DashDashKebabToCamelCase } from "./dashDashKebabToCamelCase";
import Svg from '../types/props.svg'

type CamelCase = {[K in keyof typeof Svg as DashDashKebabToCamelCase<K>]: typeof Svg[K]}

declare const svg: CamelCase & typeof Svg

export default svg