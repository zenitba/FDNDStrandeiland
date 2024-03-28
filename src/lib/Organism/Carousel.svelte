<script>
  export let data
  import { onMount } from 'svelte';

  // Functie voor het scrollen naar links of rechts binnen de carousel
  function scrollLeftOrRight(uiEvent) {
    const carouselElement = document.querySelector('.carousel');
    const scrollWidth = carouselElement.scrollWidth;
    const offsetWidth = carouselElement.offsetWidth;
    const scrollLeft = carouselElement.scrollLeft;
    const scrollXBy = (uiEvent.target.classList.contains('left-arrow') ? -1 : 1) * offsetWidth;

    // Controleer of de carousel helemaal naar links of rechts is gescrold
    if (scrollXBy < 0 && scrollLeft === 0) {
      // Als helemaal naar links, scroll dan naar het einde van de carousel
      carouselElement.scrollTo({
        left: scrollWidth - offsetWidth,
        behavior: 'smooth'
      });
    } else if (scrollXBy > 0 && Math.abs(scrollWidth - (scrollLeft + offsetWidth)) <= 1) {
      // Als helemaal naar rechts, scroll dan naar het begin van de carousel
      carouselElement.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      // Anders scrollen met de berekende hoeveelheid pixels
      carouselElement.scrollBy({
        left: scrollXBy,
        behavior: 'smooth'
      });
    }
    uiEvent.preventDefault();
    // Werk de actieve indicator bij
    updateActiveIndicator();
  }

  // Functie voor het bijwerken van de actieve indicator in de carousel
  function updateActiveIndicator() {
    const carouselElement = document.querySelector('.carousel');
    const scrollLeft = carouselElement.scrollLeft;
    const scrollWidth = carouselElement.scrollWidth;
    const offsetWidth = carouselElement.offsetWidth;
    const totalItems = Math.round(scrollWidth / offsetWidth);
    const activeIndex = Math.round(scrollLeft / scrollWidth * totalItems);

    // Vind de indicator voor de actieve items
    const indicator = document.querySelector('.carousel-indicator-span');
    // Vind alle individuele indicatoren
    const indicators = indicator.querySelectorAll('.carousel-indicator-span-span');
    // Verwijder de klasse 'is-active' van alle indicatoren
    indicators.forEach((indicator, index) => {
      indicator.classList.remove('is-active');
    });
    // Voeg de klasse 'is-active' toe aan de indicator van het actieve item
    indicators[activeIndex].classList.add('is-active');
  }

  // Functie die wordt uitgevoerd wanneer het component wordt gemonteerd
  onMount(() => {
    // Zorg ervoor dat de knoppen en indicatoren zichtbaar zijn bij als de browser JS heeft ingeschakeld
    const carouselElements = document.querySelectorAll('.carousel-link, .carousel-indicator');
    carouselElements.forEach(function(element) {
      element.hidden = false;
    });
  });

  // Zorg ervoor dat de carousel informatie button niet zichtbaar is waneer JS ingeschakeld is
  onMount(() => {
    const carouselElements = document.querySelectorAll('.carousel-info-button');
    carouselElements.forEach(function(element) {
      element.style.display = 'none';
    });
  });
</script>


<h1>Wensen</h1>

{#if data}
<section class="carousel-container">
  <!-- Vorige knop -->
  <a href="#" class="carousel-link left-arrow" on:click={scrollLeftOrRight} title="Volgende slide" hidden>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="carousel-arrow">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  </a>

  <!-- Carousel container -->
  <div class="carousel">
    <div class="carousel-inner">
      {#each data.wishes as wish}
      <div class="carousel-item">
        <img class="carousel-image" src={wish.image.url} alt="" decoding="async" width="150" height="50" loading="lazy"/>
        <div class="carousel-text">
          <h2>
            <!-- Link naar de details van het item -->
            <a href={`/overzicht/wens/${wish.id}`}>{wish.heading}</a>
          </h2>
          <p>{wish.description}</p>
          <time>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tag" width="22" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" />
            </svg>
            <p class="support">Supporters: 4</p>
          </time>
          {#if wish.image && wish.image.image && wish.image.image.url}
          <a class="sdgImage" href="https://sdgs.un.org/goals">
            <img class="susDevGoal" src={wish.image.image.url} alt="{wish.image.label}" width="50" height="50" loading="lazy"/>
          </a>
          {/if}
        </div>
      </div>
      {/each}
    </div>
  </div>

  <!-- Volgende knop -->
  <a href="#" class="carousel-link right-arrow" on:click={scrollLeftOrRight} title="Volgende slide" hidden>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="carousel-arrow">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </a>

<!-- Carrousel indicator -->
<div class="carousel-indicator" hidden>
  <span class="carousel-indicator-span">
    <!-- Loop over de wensen en toon een indicator voor elk item -->
    {#each data.wishes as wish, index}
      <span class="carousel-indicator-span-span {index === 0 ? 'is-active' : ''}"></span>
    {/each}
  </span>
</div>
 
  <!-- Knop voor informatie over carousel als js uit staat -->
  <button class="carousel-info-button">
    Scroll voor de volgende slide
  </button>
</section>
{:else}
<!-- Weergave tijdens laden -->
<p>Loading...</p>
{/if}

<!-- Terugknop -->
<div class="btn-back">
  <!-- Link naar overzicht -->
  <a href="/overzicht">
    Bekijk alle wensen
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-right-filled" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" stroke-width="0" fill="currentColor" />
    </svg>
  </a>
</div>

<style>
  h1 {
    text-align: center;
    font-size: 2.1em;
    margin: 0.5em 0;
  }

  /* Carousel container */
  .carousel-container {
    width: 70%;
    margin: 20px auto;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    background-color: rgb(255, 255, 255);
  }

  /* Carousel */
  .carousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    justify-content: center;
    position: relative;
    scrollbar-width: thin;

  }

  /* Carousel inner */
  .carousel-inner {
    display: flex;
    width: -webkit-fill-available;
}



  /* Carousel item */
  .carousel-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 0 0 100%;
    scroll-snap-align: center;
  }

  /* Carousel image */
  .carousel-image {
    width: 50%;
    height: 99%;
  }

  /* Carousel text */
  .carousel-text {
    flex: 1;
    padding: 20px;
  }

  /* Carousel text headings and links */
  .carousel-text h2,
  .carousel-text a {
    font-size: 1.1em;
    margin: 20px 0 0 0;
    color: #333;
    word-wrap: break-word;
  }

  /* Time */
  time {
    display: flex;
    align-items: center;
    gap: var(--unit-small);
  }

  /* Time support */
  time .support {
    font-weight: 600;
    margin: 15px 0;
  }

  /* Carousel link */
  .carousel-link {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #333;
    font-size: 20px;
    z-index: 2;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Carousel link - left arrow */
  .carousel-link.left-arrow {
    left: 10px;
  }

  /* Carousel link - right arrow */
  .carousel-link.right-arrow {
    right: 10px;
  }

  /* Carousel link svg */
  .carousel-link svg {
    width: 100%;
    height: 100%;
  }

  /* Carousel indicator */
  .carousel-indicator {
    --indicator-size: 10px;
    --max-indicators: 5;
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    max-width: calc(var(--max-indicators) * var(--indicator-size) + (var(--max-indicators) - 1) * var(--indicator-size) / 2);
    overflow: hidden;
    overflow: clip;
    pointer-events: none;
  }

  /* Carousel indicator span */
  .carousel-indicator-span {
    display: flex;
    gap: calc(var(--indicator-size) / 2);
    height: var(--indicator-size);
  }

  /* Carousel indicator span span */
  .carousel-indicator-span-span {
    flex: 0 0 var(--indicator-size);
    width: var(--indicator-size);
    height: var(--indicator-size);
    border-radius: 50%;
    background: rgb(0, 0, 0);
    opacity: 0.4;
    transition: 0.2s ease-out opacity;
  }

  /* Carousel indicator span span - active */
  .carousel-indicator-span-span.is-active {
    opacity: 1;
  }

  /* Carousel info button */
  .carousel-info-button {
    display: block;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
  }

  /* Button back */
  .btn-back {
    padding-left: 0;
    padding-right: 0;
    display: inline-flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }

  /* Button back anchor */
  .btn-back a {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-bottom: 20px;
    color: var(--black);
    background-color: var(--yellow);
    padding: 5px;
  }

  /* Button back svg */
  .btn-back svg {
    margin: -4px 1px;
  }

  .btn-back a:hover{
    background-color: var(--black); 
    color: var(--yellow);
  }
  /* Button back */
  .btn-back {
    display: inline-block;
    font-weight: 400;
    color: #333;
    text-align: center;
    vertical-align: middle;
  }

  /* Media queries */
  @media only screen and (max-width: 750px) {
    h1 {
      font-size: 1.5em;
    }

    .carousel-container {
      width: 90%;
    }

    .carousel-item {
      flex-direction: column;
    }

    .carousel-image {
      width: 100%;
      height: 300px;
    }
  }

  @media only screen and (max-width: 320px) {
    h1 {
      font-size: 1.2em;
    }

    .carousel-container {
      width: 90%;
      height: fit-content;
    }

    .carousel-item {
      flex-direction: column;
    }

    .carousel-image {
      width: 100%;
      height: 300px;
    }
  }
</style>

