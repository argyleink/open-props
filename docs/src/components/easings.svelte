<script>
	export let ease;
	export let playstate = 'paused';
	export let duration = '2s';
	export let strength = 3;
	export let rotation = '0.5turn';

	let durations = ['1s', '2s', '3s'];
	let strengths = [1,2,3,4,5];
	let animation = 'change-side'

	function toggle() {
		playstate = 
			playstate === 'running'
				? 'paused'
				: 'running'
	}
</script>

<div class="card easing-demo">
	<div class="controls">
		<button class="play" title="Toggle playstate" on:click={toggle}>
			{playstate}
			<svg viewBox="0 0 24 24" style={`
				--_icon-fill: ${playstate === 'running' ? 'currentColor' : 'none'};
			`}>
				<path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
			</svg>
		</button>
		<select bind:value={strength}>
			{#each strengths as str}
				<option value={str}>
					{ease} {str}
				</option>
			{/each}
		</select>
		<select bind:value={animation}>
			<option value="change-side">Translate</option>
			<option value="change-scale">Scale</option>
		</select>
		<select bind:value={duration}>
			{#each durations as dur}
				<option value={dur}>
					{dur}
				</option>
			{/each}
		</select>
	</div>
	<div class="runway">
		<div class="ball" style={`
			--_easing: var(--${ease}-${strength});
			--_playstate: ${playstate};
			--_duration: ${duration};
			--_animation: ${animation};
			--_change-rotation: ${rotation};
		`}>
			<svg viewBox="0 0 24 24" stroke-width="1.5">
				<path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
			</svg>
		</div>
	</div>
</div>

<style>
	.easing-demo {
		display: grid;
		margin-block-start: 0;

		--sl-card-border: var(--sl-color-purple);
    --sl-card-bg: var(--sl-color-purple-low);
    border: 1px solid var(--sl-color-gray-5);
    background-color: var(--sl-color-black);
    padding: var(--ec-codePadInl);
    gap: var(--ec-codePadInl);
	}

	.controls {
		max-inline-size: max-content;
		display: flex;
		gap: var(--size-2);
		padding-inline-end: var(--size-3);
		border: 1px solid var(--sl-color-gray-5);
		border-radius: var(--radius-2);
		align-items: stretch;

		& > select {
			background: inherit;
			border: none;
			margin: 0;
			text-transform: capitalize;
			padding-inline: var(--size-3) var(--size-1);
		}

		& > .play {
			background: var(--sl-color-bg-nav);
			border: none;
			border-radius: 0;
			border-inline-end: 1px solid var(--sl-color-gray-5);
			padding-block: var(--size-2);
			padding-inline: var(--size-4);
			text-transform: capitalize;
			min-inline-size: 14ch;
			display: inline-flex;
			align-items: center;
			justify-content: space-between;
			
			& > svg {
				block-size: 2.5ex;
				fill: var(--_icon-fill);
				stroke: currentColor;
			}
		}
	}

	.ball {
		aspect-ratio: var(--ratio-square);
		inline-size: calc(var(--size-content-1) / 3);
		
		animation: var(--_animation, change-side) var(--_duration, 3s) var(--_easing, linear) infinite;
		animation-play-state: var(--_playstate, paused);

		& > svg > path {
			fill: none;
			stroke: var(--sl-color-text-accent);
			stroke: color(display-p3 1 0 1);
		}
	}

	.runway {
		margin: 0;
	}
</style>
