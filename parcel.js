import css from '@parcel/css'
import fs from 'fs'

let {code} = css.transform({
  filename: 'open-props.parcel.css',
  code: fs.readFileSync('open-props.min.css'),
  minify: true,
  drafts: {
    nesting: true
  },
})

fs.writeFileSync('open-props.parcel.css', code.toString())