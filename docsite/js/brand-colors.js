console.log(
  Object.keys(import('../../src/props.brand-colors.js'))
    .map((brand) => [brand.replace(/-/g, ' ').replace('brand ', ''), brand])
    .map(
      ([brandTitlecase, brand]) =>
        `<ul class="open-colors count-em color-swatch-list"><h4>${brandTitlecase}</h4><li><button class="color-swatch" style="background-color: var(${brand})" aria-label="${brandTitlecase}"></button></li></ul>`
    )
    .join('')
)
