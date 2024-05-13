<script>
	import { createEventDispatcher } from 'svelte';

	let filters = {
		label: ''
	};

	const dispatch = createEventDispatcher();

	// Watch for changes in the filters object
	$: {
		// Dispatch 'applyFilter' event whenever filters.label changes
		dispatch('applyFilter', filters);
	}
</script>

<div class="filter-controls">
	<select bind:value={filters.label}>
		<option value="">
			<!-- SVG-afbeelding voor de filterknop -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-filter"
				width="22"
				height="22"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="#000000"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path
					d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z"
				/>
			</svg>
			Filter</option
		>
		<option value="Zero Hungry">Zero Hungry</option>
		<option value="Clean Water and Sanitation">Clean Water and Sanitation</option>
		<option value="Quality Education">Quality Education</option>
		<option value="Good Health and well being">Good Health and well being</option>
		<!-- Add more options as needed -->
	</select>
</div>

<style>
	.filter-controls {
		position: relative;
		text-align: center;
		float: inline-end;
		margin-right: 80px;
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 20px;
		color: var(--black);
		transition:
			transform 0.2s,
			background-color 0.2s;
	}

	/* Stijlen voor de filterknop */
	.filter-controls {
		font-size: 1rem;
		font-weight: 600;
	}

	/* Hover effect voor de filterknop */
	.filter-controls:hover svg path {
		fill: var(--yellow);
	}

	select {
		padding: 10px;
		font-size: 16px;
		border-radius: 5px;
		border: 1px solid #ccc;
        background-color: var(--yellow);
        font: var(--font-family-sans-serif);
		flex: 1;
        font-size: 1rem;
		font-weight: 600;
	}
</style>
