// note: do not auto-generate this file!

export type DashDashKebabToCamelCase<S extends string> =
  S extends `--${infer T}-${infer U}-${infer V}-@` ? // example: --animation-fade-in-@
    `${T}${Capitalize<U>}${Capitalize<DashDashKebabToCamelCase<V>>}At` :
  S extends `--${infer T}-${infer U}-${infer V}` ? // example: --red-0-hsl
    `${T}${Capitalize<U>}${Capitalize<DashDashKebabToCamelCase<V>>}` :
  S extends `--${infer T}-${infer U}` ? // example: --size-1
    `${T}${Capitalize<DashDashKebabToCamelCase<U>>}` :
  S