<script>
    import { onNavigate } from '$app/navigation';
    let isVisible = false;

    onNavigate((navigation) => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (document.startViewTransition && !prefersReducedMotion) {
        return new Promise((resolve) => {
          document.startViewTransition(async () => {
            resolve();
            await navigation.complete;
          });
        });
      } else {
        return new Promise((resolve) => {
          if (!prefersReducedMotion) {
            document.documentElement.classList.add('fallback-transition');
            setTimeout(() => {
              resolve();
              navigation.complete();
              document.documentElement.classList.remove('fallback-transition');
            }, 500);
          } else {
            resolve();
            navigation.complete();
          }
        });
      }
    });

    function toggleVisibility() {
      isVisible = !isVisible;
    }
</script>

<style>
    /* View Transition API - Transitie-effect voor pagina-elementen */
    @view-transition {
      .fade-item {
        transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
      }

      from {
        transform: translateY(-20px);
        opacity: 0;
      }

      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    /* Fallback animatie */
    .fade-item {
      opacity: 0;
      transform: scale(0.95);
      transition: opacity 500ms ease-out, transform 500ms ease-out;
    }

    .visible .fade-item {
      opacity: 1;
      transform: scale(1);
    }

    .fallback-transition .fade-item {
      transition: opacity 500ms ease-out, transform 500ms ease-out;
    }

    /* Verminderde animatie bij voorkeur voor reduce motion */
    @media (prefers-reduced-motion: reduce) {
      /* Reduce motion voor de standaard CSS transities */
      .fade-item {
        transition: none;
      }

      /* Reduce motion voor View Transition API */
      @view-transition {
        .fade-item {
          transition: none;
        }
      }
    }
</style>
