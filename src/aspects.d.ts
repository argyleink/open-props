import { DashDashKebabToCamelCase } from "./dashDashKebabToCamelCase";
import Aspects from '../types/props.aspects'

type CamelCase = {[K in keyof typeof Aspects as DashDashKebabToCamelCase<K>]: typeof Aspects[K]}

declare const aspects: CamelCase & typeof Aspects

export default aspects