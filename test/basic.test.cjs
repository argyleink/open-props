const test = require('ava')
const OpenProps = require('../dist/open-props.cjs')

test('Should have an all included import', t => {
  t.is(Object.keys(OpenProps).length, 349)
})

test('Import should have animations', async t => {
  t.assert(Object.keys(OpenProps).includes('--animation-fade-in'))
})

test('Import should have sizes', async t => {
  t.assert(Object.keys(OpenProps).includes('--size-5'))
})

test('Import should have colors', async t => {
  t.assert(Object.keys(OpenProps).includes('--orange-0'))
})