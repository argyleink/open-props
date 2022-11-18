const test = require('ava')
const fs = require('fs')
const OpenProps = require('../dist/open-props.cjs')
const OPtokens = require('../open-props.tokens.json')

test('Should have an all included import', t => {
  t.is(Object.keys(OpenProps).length, 1566)
})

test('Import should have animations', async t => {
  t.assert(Object.keys(OpenProps).includes('--animation-fade-in'))
  t.assert(OpenProps.animationFadeIn)
  t.assert(Object.keys(OpenProps).includes('--animation-fade-in-@'))
})

test('Import should have sizes', async t => {
  t.assert(Object.keys(OpenProps).includes('--size-5'))
  t.assert(OpenProps.size5)
})

test('Import should have colors', async t => {
  t.assert(Object.keys(OpenProps).includes('--orange-0'))
  t.assert(OpenProps.orange0)
})

test('JSON Import should have colors', async t => {
  t.is(Object.keys(OPtokens).length, 397)
  t.assert(Object.keys(OPtokens).includes('--orange-0'))
})

test('JSON Import should have types', async t => {
  t.assert(OPtokens['--gray-0'].type, 'color')
})

test('Should produce a props bundle', async t => {
  t.assert(fs.existsSync('./open-props.min.css'))
})

test('Should produce shadow :host props', async t => {
  t.assert(fs.existsSync('./open-props.shadow.min.css'))
  t.assert(fs.existsSync('./easings.shadow.min.css'))
  t.assert(fs.existsSync('./shadows.shadow.min.css'))
})

test('Should produce normalize files', async t => {
  t.assert(fs.existsSync('./normalize.min.css'))
  t.assert(fs.existsSync('./normalize.light.min.css'))
  t.assert(fs.existsSync('./normalize.dark.min.css'))
})

test('Should produce optional mask props', async t => {
  t.assert(fs.existsSync('./masks.edges.min.css'))
  t.assert(fs.existsSync('./masks.corner-cuts.min.css'))
})