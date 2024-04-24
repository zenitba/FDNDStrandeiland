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
		<option value="">Select Label</option>
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

	.filter-controls:hover {
		background-color: #e0e0e0;
	}

	select {
        font: var(--font-family-sans-serif);
		padding: 10px;
		font-size: 16px;
		border: 1px solid #ccc;
		border-radius: 5px;
		flex: 1;
		margin-right: 10px;
		appearance: none; /* Remove default dropdown arrow */
		background-color: var(--yellow); /* Override default background color */
		cursor: pointer;
	}

	select:focus {
		outline: none; /* Remove focus outline */
		border-color: #007bff; /* Highlight border color on focus */
	}
</style>
