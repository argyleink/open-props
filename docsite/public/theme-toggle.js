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

  setCodeSnippetStylesheet()
}

const setCodeSnippetStylesheet = () => {
  if (theme.value === 'dark') {
    if (document.head.querySelector('link#lightcode'))
      document.head.removeChild(document.head.querySelector('link#lightcode'))
    document.head.appendChild(theme.prismDark)
  }
  else {
    if (document.head.querySelector('link#darkcode'))
      document.head.removeChild(document.head.querySelector('link#darkcode'))
    document.head.appendChild(theme.prismLight)  
  }
}

const makeLinkStylesheet = (id, href) => {
  const link = document.createElement('link')

  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = href
  link.id = id

  return link
}

const theme = {
  value: getColorPreference(),
  prismDark: makeLinkStylesheet('darkcode', '//unpkg.com/prism-themes@1.8.0/themes/prism-nord.css'),
  prismLight: makeLinkStylesheet('lightcode', '//unpkg.com/prism-themes@1.8.0/themes/prism-material-light.css'),
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