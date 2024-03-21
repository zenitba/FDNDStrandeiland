<script>
    export let data;
    export let selectedSDG = ''; 
    export const selectedSDGChange = (sdg) => {}; 

    let showPopup = false; 

    function selectSDG(sdg) {
        selectedSDG = selectedSDG === sdg ? '' : sdg; 
        applyFilter();
    }

    function applyFilter() {
        console.log('Applying filter in Filter.svelte...');
        console.log('Selected SDG:', selectedSDG);
        selectedSDGChange(selectedSDG);
    }

    function togglePopup() {
        showPopup = !showPopup; 
    }
</script>

<div class="filter-container">
    <div class="filter-icon" on:click={togglePopup}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-filter" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" />
          </svg>
        Open filterscherm
    </div>

    {#if showPopup}
    <div class="overlay"></div>
    {/if}
    
    {#if showPopup}
    <div class="filter-popup">
        <h3>Filter op SDG</h3>
        <div class="close-btn" on:click={togglePopup}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
        </div>
        
        <div class="sdg-container">
            {#each data.wishes as wish}
                <div class="sdg-item" on:click={() => selectSDG(wish.sdg)}>
                    <img src={wish.image.image.url} alt="SDG" />
                    <input type="checkbox" checked={selectedSDG === wish.sdg} />
                </div>
            {/each}
        </div>
        
        <button class="apply-btn" on:click={applyFilter}>Pas filter toe</button>
    </div>
    {/if}
</div>

<style>
    .filter-container {
     position: relative;
    text-align: center;
    float: inline-end;
    padding-right: 15px;
    padding-left: 15px;
    border-radius: 0;
    margin-right: 80px;
    }

    .filter-icon {
    cursor: pointer;
    color: #333;
    padding: 0 0 0.2rem 0;
    border-bottom: 1.5px solid;
    border-radius: 0;
    background-color: transparent;

    }
    .filter-icon svg{
        margin: -4px 1px;

    }
    .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
     z-index: 999; 
    }

    .filter-popup {
        position: fixed;
        width: 390px;
        height: 170px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--beige);
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        z-index: 1000; 
    }

    .close-btn{
        position: absolute;
        top: 5px;
        right: 5px;
        cursor: pointer;
    }

    .sdg-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        margin-bottom: 10px;
    }

    .sdg-item {
        display: flex;
        margin-right: 10px;
    }

    .sdg-item img {
        width: 60px;
        height: 60px;
        margin-bottom: 15px;
        margin-top: 15px;
        margin-right: 5px;
    }

    .apply-btn {
        display: inline-block;
        background: var(--beige);
        font-size: 14px;
        cursor: pointer;
        align-items: center;
        border: 1px solid;
        color: var(--black);
        border-radius: 0%;
        margin-left: 20px;
        font-weight: 600;
        margin-bottom: 20px;
    }
</style>
