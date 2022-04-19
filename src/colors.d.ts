import { DashDashKebabToCamelCase } from "./dashDashKebabToCamelCase";
import Colors from '../types/props.colors'

type CamelCase = {[K in keyof typeof Colors as DashDashKebabToCamelCase<K>]: typeof Colors[K]}

declare const colors: CamelCase & typeof Colors

export default colors