import { DashDashKebabToCamelCase } from "./dashDashKebabToCamelCase";
import Borders from '../types/props.borders'

type CamelCase = {[K in keyof typeof Borders as DashDashKebabToCamelCase<K>]: typeof Borders[K]}

declare const borders: CamelCase & typeof Borders

export default borders