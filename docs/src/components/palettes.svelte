<script>
import { afterUpdate } from 'svelte'
import Color from 'colorjs.io'
import colorNameList from 'color-name-list/dist/colornames.esm.mjs'
import nearestColor from 'nearest-color'

const nearest = nearestColor.from(
	colorNameList.reduce((o, { name, hex }) => 
		Object.assign(o, { [name]: hex }), {}))

let hue = 358
let hueRotateBy = -5
let chroma = .9

let normalize, swatches, swatchCards, shuffle

$: hue, hueRotateBy, chroma

afterUpdate(() => {
	determineContrast()
	nameColors()
})

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
}

function determineContrast() {
  normalize?.querySelectorAll('.box').forEach(node => {
    const bg = new Color(node.computedStyleMap().get('background-color').toString())
    const [p, span] = node.children
    
    const c2 = new Color(p.computedStyleMap().get('color').toString())
    const c3 = new Color(span.computedStyleMap().get('color').toString())
    
    const [primary,secondary] = node.previousElementSibling.children
    
    secondary.textContent = 'AA ' + bg.contrast(c2, 'wcag21').toFixed(1)
    primary.textContent = 'AA ' + bg.contrast(c3, 'wcag21').toFixed(1)
  })
}

function nameColors() {
	// swatches?.querySelectorAll('.swatch').forEach(swatch => {
	// 	const c = new Color(swatch.computedStyleMap().get('background-color').toString())
	// 	const hex = c.to('srgb').toString({format:'hex'})

	// 	swatch.innerHTML = `<b>${nearest(hex).name}</b>`
	// })

	swatchCards?.querySelectorAll('.swatch').forEach(swatch => {
		const c = new Color(swatch.computedStyleMap().get('background-color').toString())
		const hex = c.to('srgb').toString({format:'hex'})
		const [name,prop,oklch] = swatch.nextElementSibling.children

		name.textContent = nearest(hex).name
		oklch.innerHTML = `<small>${c.toString()}</small>`
	})
}
</script>

<div class="svelte-palettes" style="
	--palette-hue: {hue};
	--palette-hue-rotate-by: {hueRotateBy};
	--palette-chroma: {chroma};
">
	
	<output class="code-output">
		<div class="split-code-and-controls">
			<div class="code">
				<div><span class="at">@</span><span class="import">import</span> <span class="string">"open-props/palette.css";</span></div>
				<div>&nbsp;</div>
				<div><span class="cls">.palette-scope</span> <span class="brace">&lcub;</span></div>
				<div class="two-tabs">  <span class="prop">--palette-hue</span>: <span class="number" contenteditable bind:innerText={hue}></span>; </div>
				<div class="two-tabs">  <span class="prop">--palette-hue-rotate-by</span>: <span class="number" contenteditable bind:innerText={hueRotateBy}></span>; </div>
				<div class="two-tabs">  <span class="prop">--palette-chroma</span>: <span class="number" contenteditable bind:innerText={chroma}></span>; </div>
				<div><span class="brace">&rcub;</span></div>
			</div>
			<div class="controls">
				<button class="shuffle" title="Shuffle" on:click={randomizeColors}>
					<svg bind:this={shuffle} viewBox="0 0 24 24" width="34" height="48">
						<path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
					</svg>
				</button>
				<input type="range" min="0" max="360" bind:value={hue}>
				<input type="range" min="-30" max="30" bind:value={hueRotateBy}>
				<input type="range" min="0" max="2" step="0.01" bind:value={chroma}>
			</div>
		</div>
	</output>

	<h3>Your Palette</h3>

	<article class="swatchset swatch-strip" bind:this={swatches} focusgroup>
		{#each Array(16) as _, i}
			<div class="swatch">
				<b>var(--color-{i})</b>
			</div>
		{/each}
	</article>

	<ul class="swatchset swatch-cards" bind:this={swatchCards} focusgroup>
		{#each Array(16) as _, i}
			<li>
				<figure>
					<div class="swatch"></div>
					<figcaption>
						<div class="name"></div>
						<div class="prop">var(--color-{i+1})</div>
						<div class="oklch"></div>
					</figcaption>
				</figure>
			</li>
		{/each}
	</ul>

	<h3>Palette Applied</h3>

	<p>Example usage of those 16 colors to create a light and dark theme. 
		<b>1 document background, 3 surfaces (cards, etc) and 2 wells.</b></p>

	<p>The following demo shows the WCAG contrast of a primary and 
		secondary text colors on each well and surface.</p>

	<section class="normalize" bind:this={normalize}>
		<!-- <div class="title">
			<b>Open Props</b><sup>v2</sup>
			<p>Example palette usage :: normalize.css theme</p>
		</div> -->
		<p><b>Light</b></p>
		<p><b>Dark</b></p>
		<div class="light"> 
			<div>
				<div class="contrast">
					<p></p>
					<p></p>
				</div>
				<div class="box"><p>Surface</p> <span>1</span></div>
			</div>
			<div>
				<div class="contrast">
					<p></p>
					<p></p>
				</div>
				<div class="box"><p>Surface</p> <span>2</span></div>
			</div>
			<div>
				<div class="contrast"><p>AA </p><p>AA </p></div>
				<div class="box"><p>Surface</p> <span>3</span></div>
			</div>
			<div>
				<div class="contrast"><p>AA </p><p>AA </p></div>
				<div class="box well"><p>Well</p> <span>1</span></div>
			</div>
			<div>
				<div class="contrast"><p>AA </p><p>AA </p></div>
				<div class="box well"><p>Well</p> <span>2</span></div>
			</div>
		</div>
		<div class="dark">
			<div>
				<div class="contrast"><p>AA </p><p>AA </p></div>
				<div class="box"><p>Surface</p> <span>1</span></div>
			</div>
			<div>
				<div class="contrast"><p>AA </p><p>AA </p></div>
				<div class="box"><p>Surface</p> <span>2</span></div>
			</div>
			<div>
				<div class="contrast"><p>AA </p><p>AA </p></div>
				<div class="box"><p>Surface</p> <span>3</span></div>
			</div>
			<div>
				<div class="contrast"><p>AA </p><p>AA </p></div>
				<div class="box well"><p>Well</p> <span>1</span></div>
			</div>
			<div>
				<div class="contrast"><p>AA </p><p>AA </p></div>
				<div class="box well"><p>Well</p> <span>2</span></div>
			</div>
		</div>
	</section>

</div>

<style>
.swatchset {
  & > :nth-of-type(1)  { --swatch: var(--color-1) }
  & > :nth-of-type(2)  { --swatch: var(--color-2) }
  & > :nth-of-type(3)  { --swatch: var(--color-3) }
  & > :nth-of-type(4)  { --swatch: var(--color-4) }
  & > :nth-of-type(5)  { --swatch: var(--color-5) }
  & > :nth-of-type(6)  { --swatch: var(--color-6) }
  & > :nth-of-type(7)  { --swatch: var(--color-7) }
  & > :nth-of-type(8)  { --swatch: var(--color-8) }
  & > :nth-of-type(9)  { --swatch: var(--color-9) }
  & > :nth-of-type(10) { --swatch: var(--color-10) }
  & > :nth-of-type(11) { --swatch: var(--color-11) }
  & > :nth-of-type(12) { --swatch: var(--color-12) }
  & > :nth-of-type(13) { --swatch: var(--color-13) }
  & > :nth-of-type(14) { --swatch: var(--color-14) }
  & > :nth-of-type(15) { --swatch: var(--color-15) }
  & > :nth-of-type(16) { --swatch: var(--color-16) }
}

.swatch-strip {
	margin-block: 1.5rem !important;
  display: flex;
	position: sticky;
	bottom: 0;

	& > .swatch {
		background: var(--swatch);
	}
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

	& code {
		background: var(--color-12);
    color: var(--color-1);
	}
  
  &:is(:hover, :focus-visible) {
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

.swatch-cards {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(10ch, 20ch));
	gap: 1rem;
	padding: 0;

	& > li {
		list-style-type: none;
	}

	& :is(figure,figcaption, figcaption > *) {
		margin: 0;
	}

	& .swatch {
		inline-size: 100%;
		background: var(--swatch);
	}

	& figcaption {
		padding-block-start: .5rem;

		& > * {
			line-height: 1.2;
		}
	}

	& .name {
		font-weight: bold;
	}

	& .prop {
		color: var(--sl-color-accent-high);
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

	& p {
		margin: 0;
	}
  
  & > .title {
    grid-column: span 2;
  }
  
  & > :is(.light,.dark) {
    display: grid;
    grid-auto-rows: 10ch;
    gap: 0 1rem;
		margin-block: 0;
		background: var(--surface-document);
		color: var(--text-2);
		padding-inline-start: 1rem;
  }
  
  & :is(.light, .dark) > div {
		display: flex;
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

	& p {
		margin: 0;
	}
}

.shuffle {
	stroke: var(--color-7);
	padding: 0;
	margin: 0;
	height: 0lh;
	inline-size: 0.75lh;
	justify-self: end;
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
	accent-color: var(--color-7);

  &::-webkit-slider-runnable-track {
    height: 2px;
  }
  
  &::-webkit-slider-thumb {
    margin-top: -7px;
    cursor: pointer;
  }
}

:global([data-theme="dark"]) .code-output {
	--_output-theme: var(--color-5);
}

.code-output {
  max-inline-size: max-content;
	--_output-theme: var(--color-10);

	& :is(.at,.import,.prop) {
		color: var(--_output-theme);
	}

	& :is(.string, .brace) {
		color: var(--sl-color-gray-2);
		color: oklch(from var(--_output-theme) l .05 h);
	}

	& .number {
		font-weight: bold;
		font-variant-numeric: tabular-nums;
		color: lime;
		color: oklch(from var(--_output-theme) l c calc(h + 60));
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
    margin-top: 2.5lh;
		max-inline-size: var(--size-content-1);

		& input[type="range"] {
			height: 3px;
		}
	}
}

.code > * {
	margin-top: 0;
}
</style>
