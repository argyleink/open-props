const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props');
const postcssNesting = require('postcss-nesting');
const postcssCustomMedia = require('postcss-custom-media');

module.exports = {
  plugins: [
    postcssNesting(),
    postcssCustomMedia(),
    postcssJitProps(OpenProps),
  ],
};
