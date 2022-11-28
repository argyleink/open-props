import {readFile, writeFile} from 'fs'

readFile('./normalize.min.css', 'utf-8', (err, contents) => {
  if (err) return console.log(err)
  const replaced = contents.replace(/:where\(html\)/g, ':host')

  writeFile('./normalize.shadow.min.css', replaced, 'utf-8', err => {
    console.log(err)
  })
})