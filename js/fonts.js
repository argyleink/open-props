export const Family = {
	sans: 'system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif',
	serif: 'ui-serif,serif',
	mono: 'Dank Mono,Operator Mono,Inconsolata,Fira Mono,ui-monospace,SF Mono,Monaco,Droid Sans Mono,Source Code Pro,monospace',
}

export const Weights = [
	'100',
	'200',
	'300',
	'400',
	'500',
	'600',
	'700',
	'800',
	'900',
]

export const LineHeights = ['.95', '1.1', '1.25', '1.375', '1.5', '1.75', '2']

export const RelativeLineHeights = [
	'calc(1rem + .5ch)',
	'calc(1rem + .75ch)',
	'calc(1rem + 1ch)',
	'calc(1rem + 1.25ch)',
	'calc(1rem + 1.5ch)',
	'calc(1rem + 2ch)',
	'calc(1rem + 2.5ch)',
	'calc(1rem + 3ch)',
]

export const LetterSpacing = [
	'-.05em',
	'.025em',
	'.050em',
	'.075em',
	'.150em',
	'.500em',
	'.750em',
	'1em',
]

export const Size = [
	'.5rem',
	'.75rem',
	'1rem',
	'1.1rem',
	'1.25rem',
	'1.5rem',
	'2rem',
	'2.5rem',
	'3rem',
	'3.5rem',
]

export const SizeFluid = [
	'clamp(.75rem, 2vw, 1rem)',
	'clamp(1rem, 4vw, 1.5rem)',
	'clamp(1.5rem, 6vw, 2.5rem)',
	'clamp(2rem, 9vw, 3.5rem)',
]

export default {
	Size,
	SizeFluid,
	LetterSpacing,
	LineHeights,
	RelativeLineHeights,
	Weights,
	Family,
}
