<script>
    export let data;
    export let selectedSDGs = []; 

    let showPopup = false; 

    function selectSDG(sdg) {
        if (selectedSDGs.includes(sdg)) {
            // SDG is al geselecteerd, dus verwijder het uit de lijst
            selectedSDGs = selectedSDGs.filter(selected => selected !== sdg);
        } else {
            // SDG is nog niet geselecteerd, dus voeg het toe aan de lijst
            selectedSDGs = [...selectedSDGs, sdg];
        }
    }

    function applyFilter() {
        console.log('Applying filter in Filter.svelte...');
        console.log('Selected SDGs:', selectedSDGs);
        togglePopup(); // Sluit het filterscherm nadat de filter is toegepast
    }

    function togglePopup() {
        showPopup = !showPopup; 
    }
</script>

<div class="filter-container">
    <button class="filter-icon" on:click={togglePopup}>
        <!-- SVG voor de filter-icoon hier, zoals eerder -->
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-filter" width="22" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" />
        </svg>
        Open Filterscherm
    </button>

    {#if showPopup}
    <button class="overlay" on:click={togglePopup}></button>
    <div class="filter-popup">
        <h3>Filter op SDG</h3>
        <button class="close-btn" on:click={togglePopup}>
            <!-- SVG voor de sluitknop hier, zoals eerder -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
            </svg>
        </button>
        
        <div class="sdg-container">
            {#each data.wishes as wish}
                <label class="sdg-item">
                    <img src={wish.image.image.url} alt={`SDG ${wish.sdg}`} />
                    <input type="checkbox" checked={selectedSDGs.includes(wish.sdg)} on:change={() => selectSDG(wish.sdg)} />
                </label>
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
        margin-right: 80px;
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        margin-bottom: 20px;
        color: var(--black);
        background-color: var(--yellow);
        transition: transform 0.2s, background-color 0.2s; 
    }

    .filter-icon {
        font-size: 1rem;
        font-weight: 600;
    /* cursor: pointer;
    color: var(--black);
    background-color: var(--yellow);
    transition: transform 0.2s, background-color 0.2s;  */


    }
    .filter-icon:hover svg path {
        fill: var(--yellow);
    }

    /* Stijlen voor knoppen bij hover */
    .filter-icon:hover {
    background-color: var(--black); 
    color: var(--yellow);

    }
    .filter-icon svg{
        margin: -5px 1px;

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
        height: 200px;
        top: 40%;
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
    justify-content: space-around; 
    margin-bottom: 10px;
}

.sdg-item {
    display: flex;
    flex-direction: column;
    align-items: center; 
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
        background: var(--yellow);
        cursor: pointer;
        align-items: center;
        color: var(--black);
        border-radius: 0%;
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        margin-bottom: 20px;        
        transition: transform 0.2s, background-color 0.2s; 
        padding: 5px;


    }
    .apply-btn:hover {
        background-color: var(--black); 
        color: var(--yellow);
        transform: scale(1.1); 

       
    }
    .filter-icon, .close-btn {
        cursor: pointer;
        border: none;
        background-color: transparent;
        display: inline-block;
    }
    @media only screen and (max-width: 450px) {
  .filter-popup {
    width: 90%; 
    height: auto; 
    top: 15%; 
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
    @media only screen and (max-width: 768px) {
  .filter-container {
    margin-right: 20px; 
    /* float: inline-start; */

  }
 
}
@media only screen and (max-width: 530px) {
  .filter-container {
    float: inline-start;
    margin: 20px;
    margin-top: 0;

  }
}
    </style>
