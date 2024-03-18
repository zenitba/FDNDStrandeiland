<script>
	import { onMount } from 'svelte';
  
	let activeId;
	let count = 0;
	let count2 = 0;
	let count3 = 0;
	let output;
	let output2;
	let output3;
	let buttonList;
  
	function countClicks() {
	  count++;
	  output.innerHTML = count;
	  document.getElementById('text').style.display = 'flex';
  
	  setTimeout(() => {
		text.remove();
	  }, 4000);
	}
  
	function countClicks2() {
	  count2++;
	  output2.innerHTML = count2;
	  document.getElementById('text2').style.display = 'flex';
  
	  setTimeout(() => {
		text2.remove();
	  }, 4000);
	}
  
	function countClicks3() {
	  count3++;
	  output3.innerHTML = count3;
	  document.getElementById('text3').style.display = 'flex';
  
	  setTimeout(() => {
		text3.remove();
	  }, 4000);
	}
  
	onMount(() => {
	  output = document.getElementById('output');
	  output2 = document.getElementById('output2');
	  output3 = document.getElementById('output3');
  
	  buttonList = document.querySelectorAll('.button');
  
	  buttonList.forEach((button) => {
		button.addEventListener('click', () => {
		  activeId = button.id;
		});
	  });
	});
  </script>

<br>
<section>
    <noscript>
        <!-- Instructies voor het inschakelen van JavaScript -->
        Voor volledige functionaliteit van deze site is het nodig JavaScript in te schakelen. Hier zijn de <a href="https://www.enable-javascript.com/">instructies voor het inschakelen van JavaScript in uw webbrowser</a>.
    </noscript>

    <!-- Titel voor de status van de wens -->
    <h2 class="status-title">Status wens</h2>

    <!-- Container voor risiconiveau -->
    <div class="container">
        <p class="risco">Risiconiveau:
            <!-- SVG-afbeelding voor risiconiveau -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-triangle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 9v4" />
                <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" />
                <path d="M12 16h.01" />
            </svg>
        </p>
    </div>

    <!-- Container voor kostenindicatie -->
    <div class="container">
        <p class="kosten">Kostenindicatie:
            <!-- SVG-afbeelding voor kostenindicatie -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency-euro" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M17.2 7a6 7 0 1 0 0 10" />
                <path d="M13 10h-8m0 4h8" />
            </svg>
        </p>
    </div>

    <!-- Container voor het aantal personen die de wens ondersteunen -->
    <div class="container">
        <div class="heart">
            <!-- SVG-afbeelding voor hartpictogram -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
        </div>
        <!-- Tekst voor het aantal personen die de wens ondersteunen -->
        <p>19 personen vinden dit een goed idee</p>
    </div>
    <br>

    <!-- Artikel voor rollen -->
    <article class="rollen">
        <!-- Lijst voor meldingen -->
        <ul class="notifications"></ul>
        <div class="buttons">
            <div class="test">
                <!-- Meldingen voor verschillende rollen -->
                <p id="text">Jouw rol als deler is opgeslagen!</p>
                <p id="text2">Jouw rol als helper is opgeslagen!</p>
                <p id="text3">Jouw rol als trekker is opgeslagen!</p>
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
            <li>Aantal mensen die dit delen: <span class="bold" id="output">{count}</span></li>
            <li>Aantal helpers: <span class="bold" id="output2">{count2}</span></li>
            <li>Aantal trekkers: <span class="bold" id="output3">{count3}</span></li>
        </ul>
    </article>

    <!-- Scheidingslijn -->
    <div class="border-line"></div>
</section>

<style>
    /* CSS-stijlen */
    .bold {
        font-weight: 700;
    }

    .rollen {
        align-items: 'center';
    }

    /* Stijlen voor meldingsteksten */
    #text,
    #text2,
    #text3 {
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
    #text::after,
    #text2::after,
    #text3::after {
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

    section {
        /* margin: 30px; */
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
        height: 35px;
        border-radius: var(--unit-micro);
        padding: var(--unit-micro) var(--unit-defalit) var(--unit-micro) 0.8em;
        transition: 0.2s ease-in-out;
        justify-content: center;
    }

    button.special {
        background-color: blueviolet;
    }

    /* Stijl voor ongeordende lijst in artikel */
    article ul {
        list-style: none;
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
/* Focus-stijlen voor meldingen */
/* #wens:focus,
#helpen:focus,
#trekken:focus {
  outline: 2px solid var(--black);
  outline-offset: 4px; 
} */

</style>
