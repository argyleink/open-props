// theme toggle
const testColorPreference = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches

const setPreference = () =>
  document.firstElementChild.setAttribute('data-theme', theme.value)

const theme = {
  value: testColorPreference() ? 'dark' : 'light',
}

setPreference()

window.onload = () => {
  document.querySelector('#theme-toggle').addEventListener('click', e => {
    theme.value = theme.value === 'light'
      ? 'dark'
      : 'light'

    setPreference()
  })
}