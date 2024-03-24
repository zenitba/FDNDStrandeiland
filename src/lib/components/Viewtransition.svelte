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
      } else if (window.CSS && CSS.supports && CSS.supports('(--custom-property: value)')) {
          // Als de browser CSS-variabelen ondersteunt, voer dan een eenvoudige animatie uit
          return new Promise((resolve) => {
              setTimeout(() => {
                  resolve();
                  navigation.complete();
              }, 500);
          });
      } else {
          // Voer hier een fallback uit voor oudere browsers die geen CSS-variabelen ondersteunen
          return new Promise((resolve) => {
              setTimeout(() => {
                  resolve();
                  navigation.complete();
              }, 500);
          });
      }
  });

  function toggleVisibility() {
      // Wanneer de toggleVisibility-functie wordt aangeroepen, wordt isVisible omgekeerd en wordt de 'visible' class toegevoegd of verwijderd
      isVisible = !isVisible;
      const elements = document.querySelectorAll('.fade-item');
      elements.forEach(element => {
          if (isVisible) {
              element.classList.add('visible');
          } else {
              element.classList.remove('visible');
          }
      });
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