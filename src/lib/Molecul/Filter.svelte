<script>
    import { createEventDispatcher } from 'svelte';
    import { SvgFilter } from '$lib';

 
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
            <SvgFilter  />


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
 