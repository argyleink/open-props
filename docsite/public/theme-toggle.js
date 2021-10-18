// theme toggle
// todo: juggle 2 theme files: nord and material
// todo: watch mq change event and toggle class for auto tests
const getColorPreference = () => {
  if (localStorage.getItem('theme-preference'))
    return localStorage.getItem('theme-preference')
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}

const setPreference = () =>
  document.firstElementChild.setAttribute('data-theme', theme.value)

const theme = {
  value: getColorPreference(),
}

setPreference()

window.onload = () => {
  document.querySelector('#theme-toggle').addEventListener('click', e => {
    theme.value = theme.value === 'light'
      ? 'dark'
      : 'light'

    localStorage.setItem('theme-preference', theme.value)
    setPreference()
  })
}