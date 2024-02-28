<script>
    export let data;
  </script>
  <h2>Wensen</h2>
  {#if data}
    <section class="carousel-container">
      <div class="carousel">
        <!-- Previous button -->
        <a href="#" class="carousel-link left-arrow"></a>
        
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
        <!-- Next button -->
        <a href="#" class="carousel-link right-arrow"></a>
      </div>
    </section>
  {:else}
    <p>Loading...</p>
  {/if}



<style>
    h2{
        text-align: center;
        font-size: 2.1em;
        margin: 0.5em 0;
    }
    .carousel-container {
    width: 75%;
    margin: 20px auto;
    border: 2px solid #b9b9b9;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
}

.carousel {
    display: flex;
    overflow-x: auto; /* Voeg dit toe als je de scrollbar wilt zien */
    scroll-snap-type: x mandatory;

}

.carousel-inner {
   display: flex;
}

.carousel-item {
    width: 100%; /* Elk carousel-item neemt de volledige breedte van de container in */
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 0 0 100%; /* Elk carousel-item neemt de volledige breedte van de container in */
    scroll-snap-align:center; /* Begin van elk item wordt vastgezet */
}

.carousel-item:first-child {
    margin-left: 0;
}

.carousel-item:not(:last-child) {
    margin-right: 0;
}

.carousel-image {
    width: 50%;
    height: 20em;

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
</style>