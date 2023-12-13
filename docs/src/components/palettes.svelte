<script>

</script>

<header class="palettes">
  <section>
    <p>Hue</p>
    <div class="swatch max"><b><code>var(--color-max)</code></b></div>
  </section>
  <section>
    <div class="title-with-control">
      <p>Options</p>
      <button id="shuffle" title="You can also press spacebar!">
        <svg viewBox="0 0 24 24" width="17" height="24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      </button>
    </div>
    <div class="controls">
      <div>
        <label for="paletteHue">Hue</label>
        <input id="paletteHue" type="range" min="0" max="360" value="358">
        <output id="paletteHueValue">0</output>
      </div>
      <div>
        <label for="paletteHueRotate">Hue Rotation</label>
        <input id="paletteHueRotate" type="range" min="-30" max="30" value="-5">
        <output id="paletteHueRotateValue">0</output>
      </div>
      <div>
        <label for="paletteChroma">Chroma</label>
        <input id="paletteChroma" type="range" min="0" max="2" step="0.01" value="0.9">
        <output id="paletteChromaValue">1</output> 
      </div>
    </div>
  </section>
  <!-- <section>
    <p>Page</p>
    <fieldset id="bg" class="form-group">
      <legend>Page Background</legend>
      <label>
        <input type="radio" name="page-background" value="var(--color-16)" checked>
        Palette Darkest
      </label>
      <label>
        <input type="radio" name="page-background" value="var(--color-1)">
        Palette Lightest
      </label>
      <label>
        <input type="radio" name="page-background" value="white">
        White
      </label>
      <label>
        <input type="radio" name="page-background" value="black">
        Black
      </label>
    </fieldset>
  </section>
  <section>
    <p>Presets</p>
    <div class="preset-group">
      <button id="openprops">Open Props</button>
    </div>
  </section> -->
</header>

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

<!-- <output class="code-output">
  <pre id="paletteout">:root {
  --palette-hue: 358;
  --palette-hue-rotate-by: -5;
  --palette-chroma: .9;
}</pre>
</output>  -->

<!-- <section>
  <dl>
    <dt><b>17 Colors</b></dt>
    <dd>8 dark</dd>
    <dd>8 light</dd>
    <dd>1 max</dd>
  </dl>
</section> -->

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

<footer>
  <p>Press <code>spacebar</code> to shuffle</p>
<!--   <small>Open Props v2 Colors PreBeta</small> -->
</footer>

<style>
.swatchset {
  inline-size: clamp(50vw, 75vw, 1024px);
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 3.5vw;
  
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

.swatch {
  inline-size: 5vw;
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
    background: oklch(70% 100% var(--palette-hue));
  }
}

.controls {
  display: grid;
  justify-content: start;
  gap: 1.25vmin;
  grid-auto-rows: 1lh;
  
  & > div {
    display: flex;
    align-items: center;
    gap: .5ch;
    
    & input {
      flex: 1;
    }
    
    & output {
      text-align: right;
      inline-size: 3ch;
      color: var(--text-2);
    }
  }
}

.palettes {
  display: flex;
  gap: 5vw;
  
  @media (width > 1024px) {
    gap: 10vw;
  }
}

:focus {
  outline-color: oklch(from var(--color-max) l c h / 75%);
}

.palettes > section {
  display: grid;
  gap: 2.5vmin;
  align-content: start;
  
  & p {
    font-weight: bold;
  }
  
  & > p, & label {
    white-space: nowrap;
    color: var(--text-1);
  }
}

.normalize {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem 5rem;
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

.form-group {
  border: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1.25vmin;
  
  & > legend {
    height: 0;
    overflow: hidden;
    clip: 0;
  }
}

input[type="range"] {
  
  &::-webkit-slider-runnable-track {
    height: 2px;
/*     background: var(--text-2); */
  }
  
  &::-webkit-slider-thumb {
    margin-top: -7px;
    cursor: pointer;
  }
}

input[type="radio"] {
  margin-inline-start: 0;
}

p {
  margin: 0;
}

.palettes :not(a, strong, em, del, span, input, code) + :not(a, strong, em, del, span, input, code, :where(.not-content *)) {
	margin-top: 0;
}

.title-with-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  & > button {
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    border-radius: 1e3px;
    aspect-ratio: 1;
    display: inline-flex;
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
}

.code-output {
  background: var(--well-1);
  padding-inline: 1rem;
  border-radius: 20px;
  max-inline-size: max-content;
}

.preset-group {
  display: flex;
  align-items: center;
  gap: 1ch;
}

dl {
  display: inline-grid;
  gap: .5ch;
  
  & > dd {
    grid-column: 2;
  }
}
</style>
