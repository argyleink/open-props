// note: do not auto-generate this file!

export type DashDashKebabToCamelCase<S extends string> =
  S extends `--${infer T}` ?
    `${DashDashKebabToCamelCase<T>}` :
  S extends `${infer T}-${infer U}` ? // example: --size-1 or --red-0-hsl
    `${T}${Capitalize<DashDashKebabToCamelCase<U>>}` :
  S extends `${infer T}@` ? // example: --animation-fade-in-@
    `${DashDashKebabToCamelCase<T>}At` :
  S