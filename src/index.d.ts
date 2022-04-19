// note: do not auto-generate this file!

// this index.d.ts file provides access WITH /src

import { DashDashKebabToCamelCase } from './dashDashKebabToCamelCase'

import propsAnimations from '../types/props.animations'
import propsSizes from '../types/props.sizes'
import propsColors from '../types/props.colors'
import propsColorsHSL from '../types/props.colors-hsl'
import propsFonts from '../types/props.fonts'
import propsBorders from '../types/props.borders'
import propsAspects from '../types/props.aspects'
import propsEasings from '../types/props.easing'
import propsGradients from '../types/props.gradients'
import propsShadows from '../types/props.shadows'
import propsSVG from '../types/props.svg'
import propsZindex from '../types/props.zindex'

type OpenPropsKebabCase =
  typeof propsAnimations &
  typeof propsSizes &
  typeof propsColors &
  typeof propsColorsHSL &
  typeof propsFonts &
  typeof propsBorders &
  typeof propsAspects &
  typeof propsEasings &
  typeof propsGradients &
  typeof propsShadows &
  typeof propsSVG &
  typeof propsZindex

type OpenPropsCamelCase = {[K in keyof OpenPropsKebabCase as DashDashKebabToCamelCase<K>]: OpenPropsKebabCase[K]}

declare const OpenProps: OpenPropsCamelCase & OpenPropsKebabCase

export default OpenProps

export const animations: typeof propsAnimations & {[K in keyof typeof propsAnimations as DashDashKebabToCamelCase<K>]: typeof propsAnimations[K]}
export const sizes: typeof propsSizes & {[K in keyof typeof propsSizes as DashDashKebabToCamelCase<K>]: typeof propsSizes[K]}
export const colors: typeof propsColors & {[K in keyof typeof propsColors as DashDashKebabToCamelCase<K>]: typeof propsColors[K]}
export const colorsHSL: typeof propsColorsHSL & {[K in keyof typeof propsColorsHSL as DashDashKebabToCamelCase<K>]: typeof propsColorsHSL[K]}
export const fonts: typeof propsFonts & {[K in keyof typeof propsFonts as DashDashKebabToCamelCase<K>]: typeof propsFonts[K]}
export const borders: typeof propsBorders & {[K in keyof typeof propsBorders as DashDashKebabToCamelCase<K>]: typeof propsBorders[K]}
export const aspects: typeof propsAspects & {[K in keyof typeof propsAspects as DashDashKebabToCamelCase<K>]: typeof propsAspects[K]}
export const easings: typeof propsEasings & {[K in keyof typeof propsEasings as DashDashKebabToCamelCase<K>]: typeof propsEasings[K]}
export const gradients: typeof propsGradients & {[K in keyof typeof propsGradients as DashDashKebabToCamelCase<K>]: typeof propsGradients[K]}
export const shadows: typeof propsShadows & {[K in keyof typeof propsShadows as DashDashKebabToCamelCase<K>]: typeof propsShadows[K]}
export const sVG: typeof propsSVG & {[K in keyof typeof propsSVG as DashDashKebabToCamelCase<K>]: typeof propsSVG[K]}
export const zindex: typeof propsZindex & {[K in keyof typeof propsZindex as DashDashKebabToCamelCase<K>]: typeof propsZindex[K]}
