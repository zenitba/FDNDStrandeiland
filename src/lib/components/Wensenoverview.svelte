<script>
    export let wish;
  </script>
  
  {#if wish}
    <!-- Wensen kaart homepage informatie -->
    <li class="wish-card">
        <img src={wish.image.url} width={wish.image.width} height={wish.image.height} alt="Afbeelding van {wish.heading}" />
        <div class="wish-details">
            <a class="BackgroundBlue" href="wens/{wish.id}">
                <h3>{wish.heading}</h3>
            </a>
            <div class="metadata">
                <p>Geplaatst op: {wish.date}</p>
                <p>Supporters: <span>4</span></p>
            </div>
            {#if wish.image && wish.image.image && wish.image.image.url}
              <a class="sdgImage" href="https://sdgs.un.org/goals">
                  <img class="susDevGoal" src={wish.image.image.url} alt="Sustainable development goals" />
              </a>
            {/if}
        </div>
    </li>
  {/if}
  

<style>
/* General Styles */
img {
    width: clamp(100%, 100%, 12rem); 
    background-color: var(--color-accent-100);  
    height: auto;
    aspect-ratio: 1/1;
    object-fit: cover;
    margin-bottom: var(--unit-small);
}

/* Wish Card Styles */
.wish-card {
    padding: var(--unit-default);
    border-radius: var(--unit-small);
    background-color: var(--color-secundary);
    list-style: none;
}

.wish-details {
    display: flex;
    flex-direction: column;
}

.wish-details a {
    width: fit-content;
    height: fit-content;
    color: var(--color-primary-50);
    padding: var(--unit-micro);
    transition: var(--animation-default) ease-in-out;
    border-radius: var(--unit-micro);
    margin-bottom: var(--unit-default);
}

.BackgroundBlue:is(:hover, :focus) {
    color: var(--color-secundary-pure);
    background-color: var(--color-blue);
}

.metadata {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--unit-default);
}

.sdgImage {
    margin-top: 20px;
    max-width: 50px;
    max-height: 50px;
    margin: 1em;
}

.sdgImage:hover {
    animation-name: grow;
    animation-duration: 2s;
    animation-fill-mode: forwards; /* Stop the animation and keep the styles of the last keyframe when finished */
}

@keyframes grow {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.5);
    }
}

</style>
