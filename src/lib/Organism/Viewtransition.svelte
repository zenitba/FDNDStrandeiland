<script>
  import { onNavigate } from '$app/navigation';
  let isVisible = false;
  let items = [];

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
        setTimeout(() => {
          resolve();
          navigation.complete();
        }, 500);
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
    transform: scale(0.95); 
    transition: opacity 500ms ease-out, transform 500ms ease-out;
  }

  .visible .fade-item {
    opacity: 1;
    transform: scale(1);
  }
</style>