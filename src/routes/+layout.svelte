<script>
  import { onNavigate } from '$app/navigation';
  let isVisible = false;
  let items = []; // Vervang dit door je eigen lijst met items uit je data

  onNavigate((navigation) => {
    // Check of de browser de ViewTransition API ondersteunt
    if (document.startViewTransition) {
      return new Promise((resolve) => {
        document.startViewTransition(async () => {
          resolve();
          await navigation.complete;
        });
      });
    } else {
      // Voer hier een fallback uit, zoals een eenvoudige animatie
      return new Promise((resolve) => {
        // Simuleer een vertraging voordat de navigatie compleet is
        setTimeout(() => {
          resolve();
          navigation.complete();
        }, 500); // Aanpassen naar een geschikte vertragingstijd
      });
    }
  });

  function toggleVisibility() {
    isVisible = !isVisible;
  }
</script>

<style>
  .fade-item {
    opacity: 0;
    transform: scale(0.95); /* Start met een iets kleinere schaal */
    transition: opacity 500ms ease-out, transform 500ms ease-out;
  }

  .visible .fade-item {
    opacity: 1;
    transform: scale(1); /* Terug naar de normale schaal */
  }
</style>

<slot />


