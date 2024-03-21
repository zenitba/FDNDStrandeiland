<!-- Overzicht.svelte -->
<script>
    export let data;
    import Filter from "./Filter.svelte";

</script>


<div class="header">
    <h2 class="header-h2">
        Ideeën voor Strandeiland
    </h2>
    <p class="header-p">
        Alle ideeën voor Strandeiland worden hier verzameld. Geef aan welke ideeën jij goed vindt. Als je je ergens voor wilt inzetten, kan je dat ook aangeven.
    </p>
    <a href="https://hallostrandeiland.nl/plaatsen" role="button" class="header-btn">
        Voeg een idee toe
    </a>
</div>
<button  class="grid-btn">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
        <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
        <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
        <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
    </svg>
    Grid View
</button>

<button  class="list-btn">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-list" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
        <path d="M4 14m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    </svg>
    List View
</button>
<!-- <Filter {data} on:selectedSDG={selectSDG} /> -->
<Filter {data} />

<section class="grid-container">
    {#each data.wishes as wish}
    <div class="grid-item">
        <div class="image-container">
            <img src="{wish.image.url}" alt="{wish.heading}" decoding="async" loading="lazy"/>
        </div>
        <div class="text-container">
            <a href={`wens/${wish.id}`}>
                <h3>
                    {#if wish.heading.split(' ').length > 3}
                        {wish.heading.split(' ').slice(0, 3).join(' ')}...
                    {:else}
                        {wish.heading}
                    {/if}
                </h3>
            </a>
            <p>
                {#if wish.description.length > 90}
                    {wish.description.slice(0, 90)}...
                {:else}
                    {wish.description}
                {/if}
            </p>
            <time>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tag" width="22" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
                    <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z"/>
                </svg>
                <span class="support">Supporters: 4</span>
            </time>
            {#if wish.image && wish.image.image && wish.image.image.url}
            <a class="sdgImage" href="https://sdgs.un.org/goals">
                <img class="susDevGoal" src="{wish.image.image.url}" alt="Sustainable development goals" loading="lazy"/>
            </a>
            {/if}
        </div>
    </div>
    {/each}
</section> 


<style>
    .header{
     display: table;
    table-layout: fixed;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
    padding: 2rem 2rem 2.5rem;
    background-color: white;
    border-radius: 0;
    width: 90%;
    }
    .header-h2{
     font-weight: 800;
     font-size: 2rem;
    line-height: 1.17;
    margin-bottom: 1.52rem;

    }
    .header-p{
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 18px;
    line-height: 1.5em;
    }
    
    .header-btn{
    text-decoration: none;
    padding: 0.55em 1.6em;
    display: inline-flex;
    align-items: center;
    border-radius: 0;
    background-color: black;
    color: white;
    float: inline-end;
    font-weight: bold;
    font-size: 104%;
    border-radius: 0;
    text-align: center;
    text-decoration: none;
    padding: 0.55em 1.6em;
    }
    .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 50px;
    width: 90%;
    }
    
    .grid-item {
        background-color: #ffffff;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: fit-content;
        
    }
    
    .grid-item img {
        max-width: 100%;
        height: auto;
    }
    
    .image-container {
        width: 100%;
        height: auto;
        text-align: center;
    }
    
    .image-container img {
        width: 100%;
        height: 200px;
    }
    
    .text-container {
        padding: 5px 20px;
        flex-grow: 1;
    }
    
    .text-container h3,
    .text-container p {
        margin: 10px 0;
        color: #333;
        word-wrap: break-word;
    }
    
    .text-container time {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-bottom: 10px;
    }
    
    .text-container .support {
        font-weight: 800;
    }
    
    .susDevGoal {
        width: 50px;
    }
    
    .sdgImage {
        display: block;
        margin-top: auto;
    }

    button, .list-btn, .grid-btn{
        display: inline-block;
        background: var(--beige);
        font-size: 14px;
        cursor: pointer;
        align-items: center;
        border: 1px solid;
        color: var(--black);
        border-radius: 0%;
        margin-left: 20px;
        font-weight: 500;
        margin-bottom: 20px;

    }
    .grid-btn{
     margin-left: 80px;
    }
    button svg {
        margin-bottom: -5px; 
        width: 21px;
    }
    
    button:hover svg path{
        fill: var(--beige);
    }
    
    button:hover{
        color: var(--beige);
        background-color: var(--black);
    }

    /* Lijstweergave */
    .grid-container.list-view {
        display: flex;
        flex-direction: column;
    }
    
    .grid-container.list-view .grid-item {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    }
    
    .grid-container.list-view .grid-item img {
        width: 100%;
        height: auto;
    }
    
    .grid-container.list-view .text-container {
        padding: 20px;
    } 
    
    .grid-container.list-view .text-container p {
        margin-bottom: 20px;
    } 
    
    .grid-container.list-view .image-container img {
        height: 200px;
    }
    
    .list-btn:focus ~ .grid-container {
        display: flex;
        flex-direction: column;
    }
    
    .list-btn:focus ~ .grid-container .grid-item {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        justify-items: center;
        margin-left: auto;
        margin-right: auto;
    }
    
    .list-btn:focus ~ .grid-container .grid-item .image-container {
        width: 30%;
    }
    
    .list-btn:focus ~ .grid-container .grid-item .text-container {
        width: 70%;
    }
    
    @media screen and (max-width: 768px) {
        .list-btn:focus ~ .grid-container .grid-item {
            display: flex;
            flex-direction: column;
            width: 90%;
            margin: 0 auto;
        }
        
        .list-btn:focus ~ .grid-container .grid-item .image-container {
            width: 100%;
        }
        
        .list-btn:focus ~ .grid-container .grid-item .text-container {
            width: 100%;
        }
    }
</style>
