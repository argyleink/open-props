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

<div class="easing-demo">
	<div class="controls">
		<button class="play" title="Playstate toggle button" on:click={toggle}>{playstate}</button>
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
		<select bind:value={strength}>
			{#each strengths as str}
				<option value={str}>
					--{ease}-{str}
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
		`}></div>
	</div>
</div>

<style>
	.easing-demo {
		display: grid;
		place-content: start;
		gap: var(--size-5);
		margin-block-start: var(--size-5);
	}

	.controls {
		display: flex;
		gap: var(--size-2);
		align-items: stretch;

		& > select {
			margin: 0;
			padding-inline: var(--size-2);
		}

		& > .play {
			min-inline-size: 10ch;
		}
	}

	.ball {
		aspect-ratio: var(--ratio-square);
		inline-size: calc(var(--size-content-1) / 3);
		background: var(--sl-color-text-accent);
		animation: var(--_animation, change-side) var(--_duration, 3s) var(--_easing, linear) infinite;
		animation-play-state: var(--_playstate, paused);
	}

	.runway {
		margin: 0;
	}
</style>
