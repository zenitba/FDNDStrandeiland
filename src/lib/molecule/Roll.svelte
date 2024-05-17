<!-- JavaScript imports en functies -->
<script>
    import { onMount } from 'svelte';
    import Levels from '$lib/atoms/Levels.svelte';

    let activeId;
    let count = 0;
    let count2 = 0;
    let count3 = 0;
    let tellerDeler;
    let tellerHelper;
    let tellerTrekker;
    let buttonList;

  
	function countClicks() {
	  count++;
	  tellerDeler.innerHTML = count;
	  document.getElementById('deler').style.display = 'flex';
  
	  setTimeout(() => {
		text.remove();
	  }, 4000);
	}
  
	function countClicks2() {
	  count2++;
	  tellerHelper.innerHTML = count2;
	  document.getElementById('helper').style.display = 'flex';
  
	  setTimeout(() => {
		text2.remove();
	  }, 4000);
	}
  
	function countClicks3() {
	  count3++;
	  tellerTrekker.innerHTML = count3;
	  document.getElementById('trekker').style.display = 'flex';
  
	  setTimeout(() => {
		text3.remove();
	  }, 4000);
	}
  
	onMount(() => {
	   tellerDeler = document.getElementById('teller-deler');
        tellerHelper = document.getElementById('teller-helper');
        tellerTrekker = document.getElementById('teller-trekker');
  
	  buttonList = document.querySelectorAll('.button');
  
	  buttonList.forEach((button) => {
		button.addEventListener('click', () => {
		  activeId = button.id;
		});
	  });
	});
  </script>

<!-- HTML structuur -->
<br>
<section>
    <noscript>
        <!-- Instructies voor het inschakelen van JavaScript -->
        Voor volledige functionaliteit van deze site is het nodig JavaScript in te schakelen. Hier zijn de <a href="https://www.enable-javascript.com/">instructies voor het inschakelen van JavaScript in uw webbrowser</a>.
    </noscript>
    <!-- Componenten -->

    <Levels />

    <!-- Artikel voor rollen -->
    <article class="rollen">
        <!-- Lijst voor meldingen -->
        <ul class="notifications"></ul>
        <div class="buttons">
            <div class="test">
                <!-- Meldingen voor verschillende rollen -->
                <p id="deler">Jouw rol als deler is opgeslagen!</p>
                <p id="helper">Jouw rol als helper is opgeslagen!</p>
                <p id="trekker">Jouw rol als trekker is opgeslagen!</p>
            </div>
            <!-- Knoppen voor het selecteren van rollen -->
            <div class="btn" id="mydiv">
                <button on:click={countClicks} id="wens" class="button" class:active={activeId == 'wens'}>Ik deel deze wens</button>
                <button on:click={countClicks2} id="helpen" class="button" class:active={activeId == 'helpen'}>Ik wil helpen</button>
                <button on:click={countClicks3} id="trekken" class="button" class:active={activeId == 'trekken'}>Ik wil trekker zijn</button>                
            </div>
        </div>
    </article>

    <!-- Artikel voor het weergeven van het aantal klikken -->
    <article>
        <ul>
            <li>Aantal mensen die dit delen: <span class="bold" id="teller-delen">{count}</span></li>
            <li>Aantal helpers: <span class="bold" id="teller-helper">{count2}</span></li>
            <li>Aantal trekkers: <span class="bold" id="teller-trekker">{count3}</span></li>
        </ul>
    </article>

    <!-- Scheidingslijn -->
    <div class="border-line"></div>
</section>

<!-- CSS-stijlen -->
<style>

/* Media query for responsiveness */
@media (max-width: 768px) {
    button {
    height: 61px;
    }
}

    /* Rollen section */
    .bold {
        font-weight: 700;
    }

    .rollen {
        align-items: 'center';
    }

    /* Stijlen voor meldingsteksten */
    #deler,
    #helper,
    #trekker {
        display: none;
        background-color: lightgreen;
        justify-content: center;
        font-weight: 600;
        font-size: 1em;
        align-items: center;
        margin-bottom: 15px;
        height: 75px;
        position: relative;
    }

    /* Animatie voor meldingsteksten */
    #deler::after,
    #helper::after,
    #trekker::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 5px;
        background: green;
        animation: lijn 4s linear forwards;
    }

    @keyframes lijn {
        100% {
            width: 0;
        }
    }

    /* Stijl voor actieve knop */
    .active {
        background-color: lightgreen;
        color: black;
    }

    .btn {
        display: flex;
        align-items: center;
        gap: 1em;
        margin-bottom: 20px;
    }

    /* Stijlen voor knoppen */
    button {
        background-color: black;
        color: white;
        display: flex;
        align-items: center;
        width: 100%;
        border: unset;
        height: 50px;
        border-radius: var(--unit-micro);
        padding: var(--unit-micro) var(--unit-defalit) var(--unit-micro) 0.8em;
        transition: 0.2s ease-in-out;
        justify-content: center;
    }

    button.special {
        background-color: blueviolet;
    }

        /* Stijlen voor containers */
        .container {
        display: flex;
        align-items: center;
    }
    /* Verticale uitlijning voor SVG-afbeeldingen */
    .icon {
        vertical-align: middle;
    }
    /* Stijlen voor hartpictogram */
    .heart {
        display: inline-block;
        vertical-align: middle;
    }
    /* Verwijder standaardmarges van paragrafen */
    p {
        margin: 0;
        font-weight: 400;
    }
    /* Stijlen voor SVG-afbeeldingen */
    svg {
        width: 35px;
    }
    /* Stijlen voor titels */
    h2 {
        font-size: 1.5rem;
        line-height: 1.17;
        font-weight: 800;
        margin-bottom: 1rem;
    }


    /* Stijl voor ongeordende lijst in artikel */
    article ul {
        list-style: none;
    }

    /* Stijl voor scheidslijn */
    .border-line {
        padding: 1.8rem 8% 1.25rem;
        border-top: 1px solid #acaeae;
        margin-top: 2.5rem;
        background-color: transparent;
        font-size: 89%;
    }

    /* Stijlen voor lijstitems in artikel */
    article ul li {
        margin-bottom: 5px;
    }
</style>
