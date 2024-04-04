<script>
      // Exporteer variabele `data` om gegevens van buitenaf te ontvangen
      export let data;
      // Lijst om geselecteerde Sustainable Development Goals (SDGs) bij te houden
      export let selectedSDGs = []; 
  
      // Boolean om de zichtbaarheid van de popup aan te geven
      let showPopup = false; 
  
      // Functie om een SDG te selecteren of deselecteren
      function selectSDG(sdg) {
          // Toggle tussen het selecteren en deselecteren van SDG
          if (selectedSDGs.includes(sdg)) {
              selectedSDGs = selectedSDGs.filter(selected => selected !== sdg);
          } else {
              selectedSDGs = [...selectedSDGs, sdg];
          }
      }
  
      // Functie om de filter toe te passen en de popup te sluiten
      function applyFilter() {
          console.log('Applying filter in Filter.svelte...');
          console.log('Selected SDGs:', selectedSDGs);
          togglePopup(); // Sluit het filterscherm nadat de filter is toegepast
      }
  
      // Functie om de zichtbaarheid van de popup om te keren
      function togglePopup() {
          showPopup = !showPopup; 
      }
  </script>
  
  
<!-- Filterfunctie -->
<div class="filter-container">
      <!-- Filterknop -->
      <button class="filter-icon" on:click={togglePopup}>
          <!-- SVG-afbeelding voor de filterknop -->
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-filter" width="22" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" />
          </svg>
          Open Filterscherm
      </button>
  
      <!-- Popup en overlay voor filteropties -->
      {#if showPopup}
      <button class="overlay" on:click={togglePopup}></button>
      <div class="filter-popup">
          <!-- Kop voor de filterpopup -->
          <h3>Filter op SDG</h3>
          <!-- Sluitknop voor de popup -->
          <button class="close-btn" on:click={togglePopup}>
              <!-- SVG-afbeelding voor de sluitknop -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
              </svg>
          </button>
          
          <!-- SDG-container met checkboxes -->
          <div class="sdg-container">
              {#each data.wishes as wish}
                  <label class="sdg-item">
                      <!-- Afbeelding van de SDG -->
                      <img src={wish.image.image.url} alt={`SDG ${wish.sdg}`} />
                      <!-- Checkbox voor de SDG -->
                      <input type="checkbox" checked={selectedSDGs.includes(wish.sdg)} on:change={() => selectSDG(wish.sdg)} />
                  </label>
              {/each}
          </div>
          
          <!-- Knop om filter toe te passen -->
          <button class="apply-btn" on:click={applyFilter}>Pas filter toe</button>
      </div>
      {/if}
  </div>
  

  <style>
      /* Stijlen voor de container van de filterknop */
      .filter-container {
          position: relative; 
          text-align: center; 
          float: inline-end; 
          margin-right: 80px; 
          font-size: 1rem; 
          font-weight: 600; 
          margin-bottom: 20px; 
          color: var(--black); 
          background-color: var(--yellow); 
          transition: transform 0.2s, background-color 0.2s; 
      }
  
      /* Stijlen voor de filterknop */
      .filter-icon {
          font-size: 1rem; 
          font-weight: 600; 
      }
  
      /* Hover effect voor de filterknop */
      .filter-icon:hover svg path {
          fill: var(--yellow); 
      }
  
      /* Stijlen voor de overlay achter de popup */
      .overlay {
          position: fixed; 
          top: 0; 
          left: 0; 
          width: 100%; 
          height: 100%; 
          background-color: rgba(0, 0, 0, 0.5); 
          z-index: 999; 
      }
  
      /* Stijlen voor de popup */
      .filter-popup {
          position: fixed; 
          width: 390px;
          height: 200px;
          top: 40%; 
          left: 50%; 
          transform: translate(-50%, -50%); 
          background-color: var(--beige); 
          border: 1px solid #ccc; 
          border-radius: 5px; 
          padding: 10px; 
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          z-index: 1000; 
      }
  
      /* Stijlen voor de sluitknop van de popup */
      .close-btn {
          position: absolute; 
          top: 5px; 
          right: 5px; 
          cursor: pointer; 
      }
  
      /* Stijlen voor de SDG-container */
      .sdg-container {
          display: flex;
          flex-wrap: wrap; 
          justify-content: space-around; 
          margin-bottom: 10px; 
      }
  
      /* Stijlen voor elk SDG-item */
      .sdg-item {
          display: flex; 
          flex-direction: column; 
          align-items: center; 
      }
  
      /* Stijlen voor de afbeeldingen van de SDG's */
      .sdg-item img {
          width: 60px; 
          height: 60px; 
          margin-bottom: 15px; 
          margin-top: 15px; 
          margin-right: 5px; 
      }
  
      /* Stijlen voor de knop om het filter toe te passen */
      .apply-btn {
          display: inline-block; 
          background: var(--yellow); 
          cursor: pointer; 
          align-items: center; 
          color: var(--black); 
          border-radius: 0%; 
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 20px; 
          transition: transform 0.2s, background-color 0.2s; 
          padding: 5px; 
      }
  
      /* Hover effect voor de knop om het filter toe te passen */
      .apply-btn:hover {
          background-color: var(--black); 
          color: var(--yellow);
          transform: scale(1.1); 
      }
  
      /* Stijlen voor de filterknop en sluitknop */
      .filter-icon,
      .close-btn {
          cursor: pointer; 
          border: none; 
          background-color: transparent; 
          display: inline-block; 
      }
  
      /* Media queries voor responsiviteit */
      @media only screen and (max-width: 450px) {
          .filter-popup {
              width: 90%;  
              height: auto;
              top: 15%;
              left: 50%;  
              transform: translate(-50%, -50%); 
          }
      }
  
      @media only screen and (max-width: 768px) {
          .filter-container {
              margin-right: 20px;  
          }
      }
  
  </style>
  