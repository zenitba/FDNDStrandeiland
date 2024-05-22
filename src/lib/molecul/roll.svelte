<script>
    import { onMount } from 'svelte'; 
    import { Levels } from '$lib';


    let activeId; 
    let counts = {
        deler: 0,
        helper: 0,
        trekker: 0
    }; // Object om de aantallen voor elke rol bij te houden
    let elements = {}; 

    // Functie om het aantal klikken voor een specifieke rol te tellen en bij te werken
    function countClicks(role) {
        counts[role]++; 
        elements[role].innerHTML = counts[role]; 
        document.getElementById(role).style.display = 'flex'; 

        // Verberg het bericht na 4 seconden
        setTimeout(() => {
            document.getElementById(role).style.display = 'none';
        }, 4000);
    }

    // Functie die wordt uitgevoerd wanneer de component wordt gemount
    onMount(() => {
        // Initialiseer de referenties naar de teller elementen
        elements = {
            deler: document.getElementById('teller-deler'),
            helper: document.getElementById('teller-helper'),
            trekker: document.getElementById('teller-trekker')
        };

        // Selecteer alle knoppen met de klasse 'button'
        const buttonList = document.querySelectorAll('.button');

        // Voeg een klikgebeurtenis toe aan elke knop om de actieve ID bij te werken
        buttonList.forEach((button) => {
            button.addEventListener('click', () => {
                activeId = button.id; // Update de actieve ID met de ID van de geklikte knop
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
                <button on:click={() => countClicks('deler')} id="wens" class="button" class:active={activeId == 'wens'}>Ik deel deze wens</button>
                <button on:click={() => countClicks('helper')} id="helpen" class="button" class:active={activeId == 'helpen'}>Ik wil helpen</button>
                <button on:click={() => countClicks('trekker')} id="trekken" class="button" class:active={activeId == 'trekken'}>Ik wil trekker zijn</button>
            </div>
        </div>
    </article>

    <!-- Artikel voor het weergeven van het aantal klikken -->
    <article>
        <ul>
            <li>Aantal mensen die dit delen: <span class="bold" id="teller-deler">{counts.deler}</span></li>
            <li>Aantal helpers: <span class="bold" id="teller-helper">{counts.helper}</span></li>
            <li>Aantal trekkers: <span class="bold" id="teller-trekker">{counts.trekker}</span></li>
        </ul>
    </article>

    <div class="border-line"></div>
</section>

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
