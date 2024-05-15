<script>
    export let data;
    import Filter from '$lib/Molecul/filter.svelte';
</script>

<!-- Header sectie -->
<div class="header">
    <h2 class="header-h2">
        Ideeën voor Strandeiland
    </h2>
    <p class="header-p">
        Alle ideeën voor Strandeiland worden hier verzameld. 
        Geef aan welke ideeën jij goed vindt. 
        Als je je ergens voor wilt inzetten, kan je dat ook aangeven.
    </p>
    <a href="https://hallostrandeiland.nl/plaatsen" role="button" class="header-btn">
        Voeg een idee toe
    </a>
</div>

<!-- Filter component -->
<Filter {data} />

<!-- Grid container voor de weergave van ideeën -->
<section class="grid-container">
    {#each data.wishes as wish}
    <div class="grid-item">
        <!-- Afbeelding container -->
        <div class="image-container">
            <img src="{wish.image.url}" alt="{wish.heading}" decoding="async" loading="lazy"/>
        </div>
        <!-- Tekst container -->
        <div class="text-container">
            <h3><a href={`/overzicht/wens/${wish.id}`}>{wish.heading}</a></h3>
            <p>{wish.description}</p>
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
                <img class="susDevGoal" src={wish.image.image.url} alt="{wish.image.label}" width="50" height="50" loading="lazy"/>
            </a>
            {/if}
        </div>
    </div>
    {/each}
</section>
<style>
/* CSS-stijlen voor de header */
.header {
    display: block;
    padding-right: 15px;
    padding-left: 15px;
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
    padding: 2.5rem 1.2rem;
    background-color: white;
    border-radius: 0;
    width: 85%;
    margin-left: 7.5%; /* Links uitgelijnd */
}

/* Stijlen voor de header h2 */
.header-h2 {
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.17;
    margin-bottom: 1.52rem;
}

/* Stijlen voor de header paragraaf */
.header-p {
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 18px;
    line-height: 1.5em;
}

/* Stijlen voor de header knop */
.header-btn {
    display: inline-flex;
    align-items: center;
    background: var(--yellow);
    color: var(--black);
    border-radius: 0%;
    font-size: 1rem;
    font-weight: bold;
    transition: transform 0.2s, background-color 0.2s; 
    padding: 0.55em 1.6em;
}

.header-btn:hover {
    background-color: var(--black); 
    color: var(--yellow);
    transform: scale(1.1);
}

/* Stijlen voor de grid-container */
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 50px;
    width: 85%;
}

/* Stijlen voor de grid-item */
.grid-item {
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: fit-content;
    transition: transform 0.2s, background-color 0.2s; 
}
.grid-item:hover {
    transform: scale(1.1); 
}

/* Stijlen voor afbeeldingen binnen grid-items */
.grid-item img {
    max-width: 100%;
    height: auto;
}

/* Stijlen voor de afbeeldingscontainer */
.image-container {
    width: 100%;
    height: auto;
    text-align: center;
}

/* Stijlen voor afbeeldingen binnen afbeeldingscontainer */
.image-container img {
    width: 100%;
    height: 200px;
}

/* Stijlen voor de tekstcontainer */
.text-container {
    padding: 5px 20px;
}

/* Stijlen voor kopjes en paragrafen binnen tekstcontainer */
.text-container h3,
.text-container p {
    margin: 10px 0;
    color: #333;
    word-wrap: break-word;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Stijlen voor tijd en supporters binnen tekstcontainer */
.text-container time {
    display: flex;
    align-items: center;
    margin: 15px -10px;
}

/* Stijlen voor het aantal supporters binnen tekstcontainer */
.text-container .support {
    font-weight: 600;
}

/* Stijlen voor de SDG afbeelding */
.sdgImage {
    display: inline-block;
    margin-top: 10px;
}

.susDevGoal {
    width: 50px;
    height: 50px;
}

</style>