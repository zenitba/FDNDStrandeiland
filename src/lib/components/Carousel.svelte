<script>
  export let data;
  import { onMount } from 'svelte';

  // Functie om naar links of rechts te scrollen
  function scrollLeftOrRight(uiEvent) {
    const carouselElement = document.querySelector('.carousel');
    const scrollWidth = carouselElement.scrollWidth;
    const offsetWidth = carouselElement.offsetWidth;
    const scrollLeft = carouselElement.scrollLeft;
    const scrollXBy = (uiEvent.target.classList.contains('left-arrow') ? -1 : 1) * offsetWidth;

    // Als we naar links gaan en bij de eerste afbeelding zijn, scroll dan naar de laatste
    if (scrollXBy < 0 && scrollLeft == 0) {
      carouselElement.scrollTo({
        left: scrollWidth - offsetWidth,
        behavior: 'smooth'
      });
    } 
    // Als we naar rechts gaan en bij de laatste afbeelding zijn, scroll dan naar de eerste
    else if (scrollXBy > 0 && Math.abs(scrollWidth - (scrollLeft + offsetWidth)) <= 1) {
      carouselElement.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } 
    // Anders, scroll normaal
    else {
      carouselElement.scrollBy({
        left: scrollXBy,
        behavior: 'smooth'
      });
    }
    // Voorkom de standaardgedrag van de link
    uiEvent.preventDefault();
    
    // Werk de actieve indicator bij
    updateActiveIndicator();
  }

  // Functie om de actieve indicator bij te werken
  function updateActiveIndicator() {
    const carouselElement = document.querySelector('.carousel');
    const scrollLeft = carouselElement.scrollLeft;
    const scrollWidth = carouselElement.scrollWidth;
    const offsetWidth = carouselElement.offsetWidth;
    const totalItems = Math.round(scrollWidth / offsetWidth);
    const activeIndex = Math.round(scrollLeft / scrollWidth * totalItems);

    const indicator = document.querySelector('.carousel-indicator-span');
    // Reset alle indicatoren
    const indicators = indicator.querySelectorAll('.carousel-indicator-span-span');
    indicators.forEach((indicator, index) => {
      indicator.classList.remove('is-active');
    });

    // Zet de actieve indicator
    indicators[activeIndex].classList.add('is-active');
  }

  // Controleer of JavaScript is ingeschakeld
  onMount(() => {
    // Als JavaScript is ingeschakeld, toon dan de carousel-elementen
    const carouselElements = document.querySelectorAll('.carousel-link, .carousel-indicator');
    carouselElements.forEach(function(element) {
      element.style.display = 'block';
    });
  });
</script>



<h2>Wensen</h2>
{#if data}
  <section class="carousel-container">
    <!-- Previous button -->
    <a href="#" class="carousel-link left-arrow"on:click={scrollLeftOrRight} aria-label="Volgende slide">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="carousel-arrow">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </a>
    
    <div class="carousel">
      <!-- Carousel items -->
      <div class="carousel-inner">
        {#each data.wishes as wish}
          <div class="carousel-item">
            <img class="carousel-image" src={wish.image.url} alt={wish.heading} decoding="async" width="150px" height="150px" loading="lazy"/>
            <div class="carousel-text">
              <a href={`wens/${wish.id}`}>
                <h3>{wish.heading}</h3>
              </a>
              <p>{wish.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
    
    <!-- Next button -->
    <a href="#" class="carousel-link right-arrow"on:click={scrollLeftOrRight} aria-label="Volgende slide">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="carousel-arrow">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </a>
    
    <!-- Carrousel indicator -->
    <div class="carousel-indicator">
      <span class="carousel-indicator-span">
        {#each data.wishes as wish, index}
          <span class="carousel-indicator-span-span {index === 0 ? 'is-active' : ''}"></span>
        {/each}
      </span>
    </div>
  </section>
{:else}
  <p>Loading...</p>
{/if}

<style>
  h2 {
    text-align: center;
    font-size: 2.1em;
    margin: 0.5em 0;
  }

  .carousel-container {
    width: 60%;
    margin: 20px auto;
    border: 2px solid rgba(0, 0, 0, 0.194);
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    background-color: white;

  }

  .carousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    justify-content: center; 
    position: relative; 
  }

  .carousel-inner {
    display: flex;
  }

  .carousel-item {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 0 0 100%; 
  scroll-snap-align: center; 
 
}

  .carousel-item:first-child {
    margin-left: 0;
  }

  .carousel-item:not(:last-child) {
    margin-right: 0;
  }

  .carousel-image {
    width: 50%;
    height: 100%;
  }

  .carousel-text {
    flex: 1;
    padding: 20px;
  }

  .carousel-text h3,
  .carousel-text p {
    margin: 0;
    color: black;
  }

  .carousel-link {
  position: absolute;
  top: 50%;
  transform: translateY(-20%);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--black); 
  font-size: 20px;
  z-index: 2;
  border-radius: 50%; 
  background-color: rgba(255, 255, 255, 0.468); 
  /* border: 2px solid rgb(255, 255, 0); */
}
  .carousel-link.left-arrow {
    left: 10px;
  }

  .carousel-link.right-arrow {
    right: 10px;
  }

  .carousel-link svg {
    width: 100%;
    height: 100%;
  }

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

  .carousel-indicator-span {
    display: flex;
    gap: calc(var(--indicator-size) / 2);
    height: var(--indicator-size);
  }

  .carousel-indicator-span-span {
    flex: 0 0 var(--indicator-size);
    width: var(--indicator-size);
    height: var(--indicator-size);
    border-radius: 50%;
    background: #00000087;
    opacity: 0.5;
    transition: 0.2s ease-out opacity;
  }

  .carousel-indicator-span-span.is-active {
    opacity: 1;
  }
  .carousel-link,
  .carousel-indicator {
    display: none;
  }
  .no-js .carousel-link,
  .no-js .carousel-indicator {
    display: block;
  }
   @media screen and (max-width: 650px) {
  .carousel {
    width: fit-content;
  }

  .carousel-item {
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    padding: 0;
    /* flex: 0 0 100%; */
  }

  .carousel-image {
    width: 60%;
    height: 50%;
  }

  .carousel-text {
     width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .carousel-text h3,
  .carousel-text p {
    width: 100%;
  }
} 
</style>