<script>
// import Color from 'https://colorjs.io/dist/color.js'

let hue = 358
let hueRotateBy = -5
let chroma = .9

let shuffle

function randomizeColors() {
  shuffle.animate([
    { transform: 'rotate(1turn)' }
  ], {
    duration: 1000,
    easing: CSS.supports('animation-timing-function: linear(0, 1)')
      ? `linear(
          0, 0.009, 0.035 2.1%, 0.141, 0.281 6.7%, 0.723 12.9%, 0.938 16.7%, 1.017,
          1.077, 1.121, 1.149 24.3%, 1.159, 1.163, 1.161, 1.154 29.9%, 1.129 32.8%,
          1.051 39.6%, 1.017 43.1%, 0.991, 0.977 51%, 0.974 53.8%, 0.975 57.1%,
          0.997 69.8%, 1.003 76.9%, 1.004 83.8%, 1
        )`
      : `ease`,
  })
    
  hue = Math.round(Math.random() * 360)
  hueRotateBy = Math.round(Math.random() * 6 * (Math.random() > .5 ? 1 : -1))
  chroma = Math.random().toFixed(2)

	// determineContrast()
}

function determineContrast() {
  document.querySelectorAll('.box').forEach(node => {
    const bg = new Color(node.computedStyleMap().get('background-color').toString())
    const [p, span] = node.children
    
    const c2 = new Color(p.computedStyleMap().get('color').toString())
    const c3 = new Color(span.computedStyleMap().get('color').toString())
    
    const [primary,secondary] = node.previousElementSibling.children
    
    primary.textContent = 'AA ' + bg.contrast(c2, 'wcag21').toFixed(1)
    secondary.textContent = 'AA ' + bg.contrast(c3, 'wcag21').toFixed(1)
  })
}
</script>

<div class="svelte-palettes" style="
	--palette-hue: {hue};
	--palette-hue-rotate-by: {hueRotateBy};
	--palette-chroma: {chroma};
">
	<article class="swatchset" id="swatchset">
		<div class="swatch"><b><code>var(--color-1)</code></b></div>
		<div class="swatch"><b><code>var(--color-2)</code></b></div>
		<div class="swatch"><b><code>var(--color-3)</code></b></div>
		<div class="swatch"><b><code>var(--color-4)</code></b></div>
		<div class="swatch"><b><code>var(--color-5)</code></b></div>
		<div class="swatch"><b><code>var(--color-6)</code></b></div>
		<div class="swatch"><b><code>var(--color-7)</code></b></div>
		<div class="swatch"><b><code>var(--color-8)</code></b></div>
		<div class="swatch"><b><code>var(--color-9)</code></b></div>
		<div class="swatch"><b><code>var(--color-10)</code></b></div>
		<div class="swatch"><b><code>var(--color-11)</code></b></div>
		<div class="swatch"><b><code>var(--color-12)</code></b></div>
		<div class="swatch"><b><code>var(--color-13)</code></b></div>
		<div class="swatch"><b><code>var(--color-14)</code></b></div>
		<div class="swatch"><b><code>var(--color-15)</code></b></div>
		<div class="swatch"><b><code>var(--color-16)</code></b></div>
	</article>

	<button class="shuffle" title="You can also press spacebar!" on:click={randomizeColors}>
		<svg bind:this={shuffle} viewBox="0 0 24 24" width="34" height="48">
			<path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
		</svg>
		Shuffle
	</button>
	
	<output class="code-output">
		<div class="split-code-and-controls">
			<div class="code">
				<div><span class="at">@</span><span class="import">import</span> <span class="string">"open-props/palette.css"</span></div>
				<div>&nbsp;</div>
				<div><span class="cls">.palette-scope</span> <span class="brace">&lcub;</span></div>
				<div class="two-tabs">  <span class="prop">--palette-hue</span>: <span class="number">{hue}</span>; </div>
				<div class="two-tabs">  <span class="prop">--palette-hue-rotate-by</span>: <span class="number">{hueRotateBy}</span>; </div>
				<div class="two-tabs">  <span class="prop">--palette-chroma</span>: <span class="number">{chroma}</span>; </div>
				<div><span class="brace">&rcub;</span></div>
			</div>
			<div class="controls">
				<input id="paletteHue" type="range" min="0" max="360" bind:value={hue}>
				<input id="paletteHueRotate" type="range" min="-30" max="30" bind:value={hueRotateBy}>
				<input id="paletteChroma" type="range" min="0" max="2" step="0.01" bind:value={chroma}>
			</div>
		</div>
	</output>

	<section class="normalize">
		<!-- <div class="title">
			<b>Open Props</b><sup>v2</sup>
			<p>Example palette usage :: normalize.css theme</p>
		</div> -->
		<p><b>Light</b></p>
		<p><b>Dark</b></p>
		<div class="light"> 
			<div style="display: flex;">
				<div class="contrast"><p></p><p></p></div>
				<div class="box"><p>Surface</p> <span>1</span></div>
			</div>
			<div style="display: flex;">
				<div class="contrast"><p></p><p></p></div>
				<div class="box"><p>Surface</p> <span>2</span></div>
			</div>
			<div style="display: flex;">
				<div class="contrast"><p></p><p></p></div>
				<div class="box"><p>Surface</p> <span>3</span></div>
			</div>
			<div style="display: flex;">
				<div class="contrast"><p></p><p></p></div>
				<div class="box well"><p>Well</p> <span>1</span></div>
			</div>
			<div style="display: flex;">
				<div class="contrast"><p></p><p></p></div>
				<div class="box well"><p>Well</p> <span>2</span></div>
			</div>
		</div>
		<div class="dark">
			<div style="display: flex;">
				<div class="contrast"><p></p><p></p></div>
				<div class="box"><p>Surface</p> <span>1</span></div>
			</div>
			<div style="display: flex;">
				<div class="contrast"><p></p><p></p></div>
				<div class="box"><p>Surface</p> <span>2</span></div>
			</div>
			<div style="display: flex;">
				<div class="contrast"><p></p><p></p></div>
				<div class="box"><p>Surface</p> <span>3</span></div>
			</div>
			<div style="display: flex;">
				<div class="contrast"><p></p><p></p></div>
				<div class="box well"><p>Well</p> <span>1</span></div>
			</div>
			<div style="display: flex;">
				<div class="contrast"><p></p><p></p></div>
				<div class="box well"><p>Well</p> <span>2</span></div>
			</div>
		</div>
	</section>

</div>

<style>
.svelte-palettes {
	& :not(a, strong, em, del, span, input, code) + :not(a, strong, em, del, span, input, code, :where(.not-content *)) {
		margin-top: 0;
	}
}

.swatchset {
  display: flex;
  
  & > .swatch:nth-of-type(1)  { background: var(--color-1) }
  & > .swatch:nth-of-type(2)  { background: var(--color-2) }
  & > .swatch:nth-of-type(3)  { background: var(--color-3) }
  & > .swatch:nth-of-type(4)  { background: var(--color-4) }
  & > .swatch:nth-of-type(5)  { background: var(--color-5) }
  & > .swatch:nth-of-type(6)  { background: var(--color-6) }
  & > .swatch:nth-of-type(7)  { background: var(--color-7) }
  & > .swatch:nth-of-type(8)  { background: var(--color-8) }
  & > .swatch:nth-of-type(9)  { background: var(--color-9) }
  & > .swatch:nth-of-type(10) { background: var(--color-10) }
  & > .swatch:nth-of-type(11) { background: var(--color-11) }
  & > .swatch:nth-of-type(12) { background: var(--color-12) }
  & > .swatch:nth-of-type(13) { background: var(--color-13) }
  & > .swatch:nth-of-type(14) { background: var(--color-14) }
  & > .swatch:nth-of-type(15) { background: var(--color-15) }
  & > .swatch:nth-of-type(16) { background: var(--color-16) }
}

.swatch {
	inline-size: calc(100%/16);
  aspect-ratio: 1;
  display: grid;
  place-content: start center;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 0px;
  transition: border-radius .2s ease;
	margin: 0;
  
  & > b {
    transition: opacity .2s ease, transform .2s ease;
    opacity: 0;
    transform: scale(.8);
  }
  
  &:hover {
    border-radius: 50%;
    
    & > b {
      opacity: 1;
      transform: translateY(-125%);
    }
  }
  
  &.max {
		inline-size: 5vw;
    background: oklch(70% 100% var(--palette-hue));
  }
}

/* Open Props Normalize.css */
.light {
  --surface-1: white;
  --surface-2: var(--color-1);
  --surface-3: var(--color-3);
  --surface-document: var(--color-4);
  --well-1: var(--color-5);
  --well-2: var(--color-6);
  --text-1: var(--color-16);
  --text-2: var(--color-12);
}
  
.dark {
  --surface-1: var(--color-11);
  --surface-2: var(--color-12);
  --surface-3: var(--color-13);
  --surface-document: var(--color-14);
  --well-1: var(--color-15);
  --well-2: var(--color-16);
  --text-1: var(--color-1);
  --text-2: var(--color-5);
}

.normalize {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem 5rem;
	padding-block-start: 1rem;
  max-inline-size: 70ch;
  
  & > .title {
    grid-column: span 2;
  }
  
  & > :is(.light,.dark) {
    display: grid;
    grid-auto-rows: 10ch;
    gap: 0 1rem;
  }
  
  & :is(.light, .dark) > div {
		margin: 0;

    &:nth-of-type(1) > .box { background: var(--surface-1) }
    &:nth-of-type(2) > .box { background: var(--surface-2) }
    &:nth-of-type(3) > .box { background: var(--surface-3) }
    &:nth-of-type(4) > .box { background: var(--well-1) }
    &:nth-of-type(5) > .box { background: var(--well-2) } 
  }
}

.box {
  display: grid;
  place-items: center;
  place-content: center;
  flex: 1;
	margin-top: 0;

  & > span {
    color: var(--text-2);
    font-size: 3rem;
		line-height: 1;
  }

  & > p {
    color: var(--text-1);
    margin: 0;
  }
}

.contrast {
  display: grid;
  place-content: center start;
  gap: 1rem;
  min-inline-size: 8ch;
}

.shuffle {
	stroke: var(--color-7);
	padding: 0;
	margin: 0;
	background: none;
	border: none;
	border-radius: 1e3px;
	aspect-ratio: 1;
	display: inline-flex;
	gap: 1ch;
	place-items: center;
	cursor: pointer;
	transform-origin: center;
	outline-offset: 3px;
	
	& > svg {
		block-size: 1lh;
		stroke-width: 2px;
		fill: none;
		stroke: var(--text-2);
	}
	
	&:hover > svg {
		stroke: var(--text-1);
	}
}

input[type="range"] {
	/* accent-color: var(--color-7); */

  &::-webkit-slider-runnable-track {
    height: 2px;
  }
  
  &::-webkit-slider-thumb {
    margin-top: -7px;
    cursor: pointer;
  }
}

.code-output {
  max-inline-size: max-content;

	& :is(.at,.import,.prop) {
		color: var(--color-5);
	}

	& :is(.string, .brace) {
		color: var(--sl-color-gray-2);
		color: oklch(from var(--color-5) l .05 h);
	}

	& .number {
		color: lime;
		color: oklch(from var(--color-5) l c calc(h + 60));
	}
}

.split-code-and-controls {
	max-inline-size: max-content;
	display: grid;
	grid-template-columns: auto 1fr;
	--sl-card-border: var(--sl-color-purple);
	--sl-card-bg: var(--sl-color-purple-low);
	border: 1px solid var(--sl-color-gray-5);
	background-color: var(--sl-color-black);
	padding: 1rem;

	& .two-tabs {
		padding-inline-start: 2ch;
	}

	& > .controls {
		display: grid;
    grid-auto-rows: 1lh;
    margin-top: 3.5lh;
		max-inline-size: var(--size-content-1);

		& input[type="range"] {
			height: 3px;
		}
	}
}
</style>
