import { DashDashKebabToCamelCase } from "./dashDashKebabToCamelCase";
import Easing from '../types/props.easing'

type CamelCase = {[K in keyof typeof Easing as DashDashKebabToCamelCase<K>]: typeof Easing[K]}

declare const easing: CamelCase & typeof Easing

export default easing