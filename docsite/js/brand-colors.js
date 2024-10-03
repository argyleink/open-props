import brandProps from '../../src/props.brand-colors.js'

const brandColors = document.querySelector('#brand-colors')

for (const [brand, color] of Object.entries(brandProps)) {
  const brandTitlecase = brand.replace(/-/g, ' ').replace('brand ', '')
  brandColors.innerHTML += `<ul class="open-colors count-em color-swatch-list"><h4>${brandTitlecase}</h4><li><button class="color-swatch" style="background-color: var(${brand})" aria-label="${brandTitlecase}"></button></li></ul>`
}
