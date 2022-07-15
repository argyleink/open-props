// theme toggle
const getColorPreference = () => {
  if (localStorage.getItem('theme-preference'))
    return localStorage.getItem('theme-preference')
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}

const setPreference = () => {
  localStorage.setItem('theme-preference', theme.value)
  reflectPreference()
}

const reflectPreference = () => {
  document.firstElementChild.setAttribute('data-theme', theme.value)
  document.querySelector('#theme-toggle')?.setAttribute('aria-live', theme.value)
}

const theme = {
  value: getColorPreference(),
}

// set early so no page flashes
reflectPreference()

window.onload = () => {
  // set on load so screen readers can see latest value on the button
  reflectPreference()

  document.querySelector('#theme-toggle').addEventListener('click', e => {
    theme.value = theme.value === 'light'
      ? 'dark'
      : 'light'

    setPreference()
  })
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({matches:isDark}) => {
    theme.value = isDark ? 'dark' : 'light'
    setPreference()
  })