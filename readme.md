<div align="center">
  
![Open Props Logo](https://user-images.githubusercontent.com/1134620/141246730-7df4cf2a-6249-42ca-a01b-494c3ccddabe.png)

## Open Source CSS Variables
  
`colors` `gradients` `shadows` `aspect ratios` `typography`  
`easings` `animations` `sizes` `borders` `z-indexes` `media-queries`  

[![Tests](https://github.com/argyleink/open-props/actions/workflows/tests.yml/badge.svg?branch=main)](https://github.com/argyleink/open-props/actions/workflows/tests.yml)
[![npm version](http://img.shields.io/npm/v/open-props.svg)](https://npmjs.org/package/open-props)
![Discord](https://badgen.net/discord/members/AqA4fU886r)
  
<br>

### Need help? &nbsp; 👉 &nbsp; [Discord](https://discord.gg/AqA4fU886r) 
  
</div>

<br>

#### CDN ([browse](https://unpkg.com/browse/open-props@latest/))
- [https://unpkg.com/open-props](https://unpkg.com/open-props)
- [https://unpkg.com/open-props/normalize.min.css](https://unpkg.com/open-props/normalize.min.css) - Normalize (light + dark) [demo](https://codepen.io/argyleink/pen/KKvRORE)
- [https://unpkg.com/open-props/open-props.tokens.json](https://unpkg.com/open-props/open-props.tokens.json) - Design Tokens
- [https://unpkg.com/open-props/open-props.figma-tokens.sync.json](https://unpkg.com/open-props/open-props.figma-tokens.sync.json) - Figma Design Tokens
- [https://unpkg.com/open-props/open-props.style-dictionary-tokens.json](https://unpkg.com/open-props/open-props.style-dictionary-tokens.json) - Style Dictionary Tokens

#### Bookmarklet

```js
javascript: (() => {
  const href = "https://unpkg.com/open-props";
  document.head.append(Object.assign(document.createElement("link"),{rel:"stylesheet",href}));
})();
```

#### CLI
- `npm run gen:op` - runs through `src/` js files and creates the PostCSS files in `src/`
- `npm run gen:nowhere`  - creates a version of Open Props without the use of `:where()`
- `npm run gen:shadowdom` - creates a version of Open Props with `:host` as the selector scope
- `npm run gen:prefixed` - creates a version of Open Props with each prop prefixed with `op`, like `--op-font-size-1`
- `npm run bundle` - creates all the various minified bundles of props
- `npm run lib:js` - builds the JS modules for NPM
