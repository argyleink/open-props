const selects = document.querySelectorAll('select')

selects.forEach(select => {
  select.addEventListener('change', e => {

    let value = e.target.value

    let sizes = select
      .closest('.relative-sizes-demo')
      .querySelector('.sizes-demo')
      .children

    for (let i = 0; i < sizes.length; i++) {
        let size = sizes[i];
        size.style.fontSize = `var(--font-size-${value})`;
      }
  })
})

