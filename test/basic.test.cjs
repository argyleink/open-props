const test = require('ava')
const OpenProps = require('../dist/open-props.cjs')

test('Should have an all included import', t => {
  t.is(Object.keys(OpenProps).length, 11)
})

test('Import should have named children', async t => {
  t.assert(Object.keys(OpenProps.Easings).length > 1)
})