export const Sizes = ['1px', '2px', '5px', '10px', '25px']

export const Radius = ['2px', '5px', '1rem', '2rem', '4rem', '8rem', '1e5px']

export const RadiusConditional = [
	'clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-1))',
	'clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-2))',
	'clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-3))',
	'clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-4))',
	'clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-5))',
	'clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-6))',
]

export const Blobs = [
	'30% 70% 70% 30% / 53% 30% 70% 47%',
	'53% 47% 34% 66% / 63% 46% 54% 37%',
	'37% 63% 56% 44% / 49% 56% 44% 51%',
	'63% 37% 37% 63% / 43% 37% 63% 57%',
	'49% 51% 48% 52% / 57% 44% 56% 43%',
]

export default {
	Sizes,
	Radius,
	RadiusConditional,
	Blobs,
}
