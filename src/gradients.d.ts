import { DashDashKebabToCamelCase } from "./dashDashKebabToCamelCase";
import Gradients from '../types/props.gradients'

type CamelCase = {[K in keyof typeof Gradients as DashDashKebabToCamelCase<K>]: typeof Gradients[K]}

declare const gradients: CamelCase & typeof Gradients

export default gradients