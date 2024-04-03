<script>
  // Imports van Svelte-componenten
  import Navbar from '$lib/Organism/Navbar.svelte';
  import Roll from '$lib/Molecul/Roll.svelte';
  import Sdg from '$lib/Atoms/SDG.svelte';  
  import Status from '$lib/Organism/Status.svelte';
  import Footer from '$lib/Organism/Footer.svelte';


  // Sla de data op in een store
  import { writable } from 'svelte/store';
  export let data;
  export const test = writable(1);
  
</script>
  
  <!-- Layout voor Wensen -->
  <Navbar />

  <main>
    <!-- Terugknop -->
    <span class="btn-back">
        <a href="/overzicht">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"/></svg>
            Terug</a>
    </span>
       <section id="wensen" class="wensen">
          <header>
            <!-- Titel en label van de wens -->
            <p>Wens</p>
            <h2>{data.wish.heading}</h2>
            <mark>{data.wish.label}</mark>
        </header>
        <!-- Afbeelding van de wens -->
        <picture>
            <source srcset={data.wish.image.webpUrl} type="image/webp">
            <img src={data.wish.image.url} alt="foto van {data.wish.heading}" width="650" height="400" loading="eager">
          </picture>
            <div class="wrapper">
            <time>
                <!-- Pictogram voor datum -->
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flag" width="26" height="26" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z" />
                  <path d="M5 21v-7" />
                </svg>
                Geplaatst op: {data.wish.date}
            </time>
            <!-- Beschrijving van de wens -->
            <div class="description">
                <p>{data.wish.description}</p>
            </div>
            <!-- Sdg-component -->
            <Sdg {data} />
            <!-- Rollen-component -->
            <Roll />
        </div>
      </section>
    <Status {data} />
  </main>
<Footer />

  
  <style>
    /* Algemene stijl voor de hoofdinhoud */
    main {
        width: 80vw;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
  
    }
  
    /* Stijl voor secties */
    section {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: 0;
        margin-bottom: 70px;
        max-width: 38rem;
  
    }
  
    /* Stijl voor de inhoudswrapper */
    .wrapper {
        margin: 0 8% 1.3rem;
    }
  
    /* Stijl voor de header */
    header {
        margin: 5% 8% 2.5rem;
        display: block;
    }
  
    /* Stijl voor paragrafen in de header */
    header p {
        font-variant-caps: all-small-caps;
        letter-spacing: 1px;
        font-size: 92%;
        margin: 0 0 1.6rem 0;
    }
  
    /* Stijl voor koppen in de header */
    header h2 {
      font-size: 2rem;
        line-height: 1.17;
        font-weight: 800;
        margin-bottom: 1.52rem;
    }
  
    /* Stijl voor markeringen in de header */
    header mark {
        font-size: 90%;
        line-height: 126%;
        width: 68%;
    }
  
    /* Stijl voor afbeeldingen */
    img {
        max-width: 100%;
    }
  
    /* Algemene stijl voor knoppen */
    /* span{
    padding-left: 0;
    padding-right: 0;
    display: inline-flex;
    align-items: center; 
    margin: 1.5rem 0; 
    } */
  
    .btn-back {
    padding-left: 0;
    padding-right: 0;
    display: inline-flex;
    align-items: center; 
    margin: 1.5rem 0;
    }
  
    /* Stijl voor terugknop */
    .btn-back a {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-bottom: 10px;
    color: var(--black);
    background-color: var(--yellow);
    padding: 0.375rem 0.75rem; 
   }

    .btn-back a:hover,
    .btn-back:hover svg path
    {
    background-color: var(--black); 
    color: var(--yellow);
    fill: var(--yellow);
  }
  .description{
    margin-bottom: 10px;
  }
    /* Stijl voor tijdselementen */
    time {
        display: flex;
        align-items: center;
        gap: var(--unit-small);
        padding: 1em 0em 1em 0em;
        margin: 2% 0%;
        font-weight: 800;
    }
    @media only screen and (max-width: 668px) {
  main {
  width: 100vw; /* Correctie: dit was 'margin-left: 20p;' */
  margin-right: auto;
  margin-left: auto;
  }

}


  </style>
  