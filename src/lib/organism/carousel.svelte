<script>
    export let data;
    import { onMount } from 'svelte';
    import { SvgSupport } from '$lib';
  
    function scrollLeftOrRight(direction) {
      const carouselElement = document.querySelector('.carousel');
      const offsetWidth = carouselElement.offsetWidth;
      const scrollXBy = direction === 'left' ? -offsetWidth : offsetWidth;
      const scrollWidth = carouselElement.scrollWidth;
      const scrollLeft = carouselElement.scrollLeft;
  
      if (direction === 'left' && scrollLeft === 0) {
        carouselElement.scrollTo({
          left: scrollWidth - offsetWidth,
          behavior: 'smooth'
        });
      } else if (direction === 'right' && Math.abs(scrollWidth - (scrollLeft + offsetWidth)) <= 1) {
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
      updateActiveIndicator();
    }
  
    function updateActiveIndicator() {
      const carouselElement = document.querySelector('.carousel');
      const scrollLeft = carouselElement.scrollLeft;
      const offsetWidth = carouselElement.offsetWidth;
      const activeIndex = Math.round(scrollLeft / offsetWidth);
  
      document.querySelectorAll('.carousel-indicator-span span').forEach((ind, index) => {
        ind.classList.toggle('is-active', index === activeIndex);
      });
    }
  
    function scrollToSlide(index) {
      const carouselElement = document.querySelector('.carousel');
      const offsetWidth = carouselElement.offsetWidth;
      carouselElement.scrollTo({
        left: offsetWidth * index,
        behavior: 'smooth'
      });
      updateActiveIndicator();
    }
  
    onMount(() => {
      document.querySelectorAll('.carousel-link, .carousel-indicator').forEach(element => {
        element.hidden = false;
      });
  
      document.querySelectorAll('.carousel-info-button').forEach(element => {
        element.style.display = 'none';
      });
    });
  </script>
  
  
  <h1>Wensen</h1>
  
  {#if data}
    <section class="carousel-container">
      <button class="carousel-link left-arrow" on:click={() => scrollLeftOrRight('left')} title="Vorige slide" hidden>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="carousel-arrow">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
  
      <div class="carousel">
        <div class="carousel-inner">
          {#each data.wishes as wish, index}
            <article class="carousel-item">
              <img class="carousel-image" src={wish.image.url} alt="" decoding="async" width="150" height="50" loading="lazy"/>
              <div class="carousel-text">
                <h2><a href={`/overzicht/wens/${wish.id}`}>{wish.heading}</a></h2>
                <p>{wish.description}</p>
                <time>
                  <SvgSupport  />
                  <p class="support">Supporters: 4</p>
                </time>
                {#if wish.image && wish.image.image && wish.image.image.url}
                  <a class="sdgImage" href="https://sdgs.un.org/goals">
                    <img class="susDevGoal" src={wish.image.image.url} alt="{wish.image.label}" width="50" height="50" loading="lazy"/>
                  </a>
                {/if} 
              </div>
            </article>
          {/each}
        </div>
      </div>
  
      <button class="carousel-link right-arrow" on:click={() => scrollLeftOrRight('right')} title="Volgende slide" hidden>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="carousel-arrow">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
  
      <div class="carousel-indicator">
        <span class="carousel-indicator-span">
          {#each data.wishes as wish, index}
            <span class="carousel-indicator-span-span {index === 0 ? 'is-active' : ''}" on:click={() => scrollToSlide(index)}></span>
          {/each}
        </span>
      </div>
  
      <div class="button-container">
        <button class="carousel-info-button">
          Scroll voor de volgende slide
        </button>
      </div>
    </section>
  {/if}
  
  <nav class="btn-back">
    <a href="/overzicht">
      Bekijk alle wensen
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-right-filled" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" stroke-width="0" fill="currentColor" />
      </svg>
    </a>
  </nav>
<style>
    .carousel-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  scrollbar-width: none;
}

.carousel {
  display: flex;
  overflow-x: auto;
  width: 70%;
  margin: 20px auto;
  scroll-snap-type: x mandatory;
  justify-content: center;
  position: relative;
  background-color: #fff;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel-inner {
  display: flex;
  width: 100%;
}

.carousel-item {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 0 0 100%;
  scroll-snap-align: center;
}

.carousel-image {
  width: 50%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 16 / 9;
}

.carousel-text {
  flex: 1;
  padding: 20px;
}

.carousel-text h2,
.carousel-text a {
  font-size: 1.1em;
  color: #333;
}

time {
  display: flex;
  align-items: center;
  margin: 15px 0;
}

time .support {
  font-weight: 600;
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
  color: #000;
  font-size: 3em;
  z-index: 2;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.686);
}

.carousel-link.left-arrow {
  left: 10%;
}

.carousel-link.right-arrow {
  right: 10%;
}

.carousel-indicator {
  --indicator-size: 10px;
  --max-indicators: 5;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: calc(var(--max-indicators) * var(--indicator-size) + (var(--max-indicators) - 1) * var(--indicator-size) / 2);
  overflow: hidden;
  pointer-events: auto;
}

.carousel-indicator-span {
  display: flex;
  gap: calc(var(--indicator-size) / 2);
  height: var(--indicator-size);
}

.carousel-indicator-span span {
  flex: 0 0 var(--indicator-size);
  width: var(--indicator-size);
  height: var(--indicator-size);
  border-radius: 50%;
  background: #00000087;
  opacity: 0.5;
  transition: 0.2s ease-out opacity;
  cursor: pointer;
}

.carousel-indicator-span span.is-active {
  opacity: 1;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-info-button {
  background-color: #000;
  color: var(--yellow);
  border: none;
  cursor: pointer;
  padding: 5px;
  font-weight: 600;
  font-size: 0.9em;
}
.btn-back {
      display: inline-block;
      font-weight: 400;
      color: #333;
      text-align: center;
      align-items: center;
      vertical-align: middle;
      margin: 20px 0;

    }

    .btn-back {
    padding-left: 0;
    padding-right: 0;
    display: inline-block;
    align-items: center;
    vertical-align: middle;
    width: 100%;
    margin: 20px 0;
  }
  

.btn-back a {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--black);
  background-color: var(--yellow);
  padding: 5px;
}

.btn-back svg {
  margin: 0 -2px;
}

.btn-back a:hover {
  background-color: var(--black);
  color: var(--yellow);
}

@media only screen and (max-width: 750px) {
  h1 {
    font-size: 1.5em;
    margin-top: 20px;
    margin-bottom: 0;
  }

  .carousel-item {
    flex-direction: column;
  }

  .carousel-image {
    width: 100%;
    height: 300px;
  }
}

@media only screen and (max-width: 520px) {
  h1 {
    font-size: 1.3em;
  }

  .carousel-item {
    flex-direction: column;
  }

  .carousel-text p {
    margin: 0;
    max-height: 9em;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .carousel-image {
    width: 100%;
    height: 200px;
  }
}

</style>
  