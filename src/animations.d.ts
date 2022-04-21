import { DashDashKebabToCamelCase } from "./dashDashKebabToCamelCase";
import Animations from '../types/props.animations'

type CamelCase = {[K in keyof typeof Animations as DashDashKebabToCamelCase<K>]: typeof Animations[K]}

declare const animations: CamelCase & typeof Animations

export default animations