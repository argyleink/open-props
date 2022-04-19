// note: do not auto-generate this file!

import { DashDashKebabToCamelCase } from '../types/dashDashKebabToCamelCase'

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

declare var OpenProps: OpenPropsCamelCase & OpenPropsKebabCase

export default OpenProps