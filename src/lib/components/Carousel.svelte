<script>
  export let data;
  import { goto } from '$app/navigation';

  import { onMount } from 'svelte';

  function scrollLeftOrRight(uiEvent) {
    const carouselElement = document.querySelector('.carousel');
    const scrollWidth = carouselElement.scrollWidth;
    const offsetWidth = carouselElement.offsetWidth;
    const scrollLeft = carouselElement.scrollLeft;
    const scrollXBy = (uiEvent.target.classList.contains('left-arrow') ? -1 : 1) * offsetWidth;

    if (scrollXBy < 0 && scrollLeft === 0) {
      carouselElement.scrollTo({
        left: scrollWidth - offsetWidth,
        behavior: 'smooth'
      });
    } else if (scrollXBy > 0 && Math.abs(scrollWidth - (scrollLeft + offsetWidth)) <= 1) {
      carouselElement.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      carouselElement.scrollBy({
        left: scrollXBy,
        behavior: 'smooth'
      });
    }
    uiEvent.preventDefault();
    updateActiveIndicator();
  }

  function updateActiveIndicator() {
    const carouselElement = document.querySelector('.carousel');
    const scrollLeft = carouselElement.scrollLeft;
    const scrollWidth = carouselElement.scrollWidth;
    const offsetWidth = carouselElement.offsetWidth;
    const totalItems = Math.round(scrollWidth / offsetWidth);
    const activeIndex = Math.round(scrollLeft / scrollWidth * totalItems);

    const indicator = document.querySelector('.carousel-indicator-span');
    const indicators = indicator.querySelectorAll('.carousel-indicator-span-span');
    indicators.forEach((indicator, index) => {
      indicator.classList.remove('is-active');
    });
    indicators[activeIndex].classList.add('is-active');
  }

  onMount(() => {
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
  <a href="#" class="carousel-link left-arrow" on:click={scrollLeftOrRight} aria-label="Volgende slide">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="carousel-arrow">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  </a>

  <div class="carousel">
    <div class="carousel-inner">
      {#each data.wishes as wish}
      <div class="carousel-item">
        <img class="carousel-image" src={wish.image.url} alt={wish.heading} decoding="async" width="150px" height="150px" loading="lazy"/>
        <div class="carousel-text">
          <a href={`wens/${wish.id}`}>
            <h3>{wish.heading}</h3>
          </a>
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
            <img class="susDevGoal" src={wish.image.image.url} alt="Sustainable development goals" width="50px" height="50px" loading="lazy"/>
          </a>
          {/if}
        </div>
      </div>
      {/each}
    </div>
  </div>

  <!-- Next button -->
  <a href="#" class="carousel-link right-arrow" on:click={scrollLeftOrRight} aria-label="Volgende slide">
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
<div class="btn-back">
  <a href="/overzicht">
    Bekijk alle wensen
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-right-filled" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" stroke-width="0" fill="currentColor" />
    </svg>
  </a>
</div>

<style>
  h2 {
    text-align: center;
    font-size: 2.1em;
    margin: 0.5em 0;
  }

  .carousel-container {
    width: 70%;
    margin: 20px auto;
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
    width: -webkit-fill-available;
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
    height:99%;
  }

  .carousel-text {
    flex: 1;
    padding: 20px;
  }

  .carousel-text h3,
  .carousel-text p {
    margin:20px 0 0 0 ;
    color: #333;
    word-wrap: break-word;
  }

  .carousel-link,
  .carousel-indicator {
    display: none;
  }

  .no-js .carousel-link,
  .no-js .carousel-indicator {
    display: block;
  }

  time {
      display: flex;
      align-items: center;
      gap: var(--unit-small);
  }
  
  time .support{
    font-weight: 800;
    margin: 15px 0;
  }
  .btn-back{
    padding-left: 0;
    padding-right: 0;
    display: inline-flex;
    align-items: center; 
    width: 100%;
    margin-bottom: 20px;
    }
    
  .btn-back a{
    color: black;
    font-size: 1.1em;
  }

  .btn-back svg{
    margin: -4px 1px;
  }

  .btn-back {
    display: inline-block;
    font-weight: 400;
    color: #333;
    text-align: center;
    vertical-align: middle;
  }
  
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

  @media only screen and (max-width: 750px) {
    h2 {
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
    h2 {
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
