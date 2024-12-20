import { Fluid, Relative, Size } from '../sizes.js'

export const NegativeSize = Size.map((size) => `-${size}`)

export const NegativeRelative = Relative.map((size) => `-${size}`)

export const NegativeFluid = Fluid.map((size) => `calc(-1 * ${size})`)

export default {
	NegativeSize,
	NegativeRelative,
	NegativeFluid,
}
