
<!-- Hero -->
<section class="hero">
    <img class="hero-bg" src="/styles/hero.jpg" alt="Hero Background" loading="eager" width="2000" height="1000"/>
     <div class="container">
        <div class="hero-content">
            <div class="hero-text">
                <span>Welkom</span>
                <span>thuis</span>
                <span>op</span>
                <span>Strandeiland</span>
            </div>
            <div class="hero-info">
                <p>
                Het land van Strandeiland ligt klaar! Het land moet nu zakken, tot rust komen en vervolgens kan er gebouwd gaan worden.
                </p>
                <p>
                Op deze website kan je het laatste nieuws over Strandeiland volgen en deelnemen aan het gesprek over hoe we van dit eiland een prachtige plek kunnen maken om te wonen, werken en ontspannen.
                </p>
                <p>
                Samen kunnen we ervoor zorgen dat Strandeiland een duurzame en leefbare woonwijk wordt!
                </p>
                <a href="https://hallostrandeiland.nl/plaatsen" aria-label="Link naar Strandeiland informatie" role="button" class="btn btn-primary">Deel jouw Strandeiland-info</a>
            </div>
        </div>
    </div>
</section>


<style>
    /* Hero */
    .hero-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }
    
    /* Hero layout */
    .hero-content {
        display: flex;
        list-style: none; 
        justify-content: space-evenly;
        align-items: center;
    }
    
    /* Hero laarzen img */
    .hero-text {
        background-image: url("https://hallostrandeiland.nl/networks/hallostrandeiland/img/laarzen_bg.svg");
        background-repeat: no-repeat;
        background-size: 12rem;
        background-position: 18% 100%;
        padding-bottom: 9rem !important;
    }
   /* Hero */
   .hero {
    background-image: url("https://hallostrandeiland.nl/networks/hallostrandeiland/img/hse_hero-bg.webp");
    background-image: url("https://hallostrandeiland.nl/networks/hallostrandeiland/img/hse_hero-bg.png");
    background-image: url("https://hallostrandeiland.nl/networks/hallostrandeiland/img/hse_hero-bg.avif");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 6rem 0 3rem;
    display: flex;
    position: relative;
    overflow: hidden;
    align-items: center;

    /* Containment toegevoegd */
    contain: layout style;
}

 
    /* Hero layout */
    .hero-content {
        display: flex;
        list-style: none; 
        justify-content: space-evenly;
        align-items: center;
    
    }
    
    /* Hero laarzen img */
    .hero-text {
        background-image: url("https://hallostrandeiland.nl/networks/hallostrandeiland/img/laarzen_bg.svg");
        background-repeat: no-repeat;
        background-size: 12rem;
        background-position: 18% 100%;
        padding-bottom: 9rem !important;
    
    }
    /* Hero text borders */
    .hero-text span:nth-child(1) {
        color: var(--white);
        background-color: var(--blue);
    }
    
    .hero-text span:nth-child(2) {
        color: var(--black);
        background-color: var(--yellow);
    }
    
    .hero-text span:nth-child(3) {
        color: var(--white);
        background-color: var(--black);
    }
    
    .hero-text span:nth-child(4) {
        color: var(--black);
        background-color: var(--white);
    }
    
    .hero-text span {
        font-size: 2.1rem;
        font-weight: 700;
        padding: 0 0.8rem;
        display: flex;
        margin-bottom: 0.3rem;
        width: fit-content;
    }
    /* Textborder */
    .hero-info {
        margin-top: 2.6rem;
        background-color: var(--yellow);
        padding: 1.4rem 2rem 1.1rem;
        font-weight: var(--font-weight-400);
        flex-basis: 45%;
    }
    .hero-info p{
        font-weight: 300;
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: 17px;
        line-height: 1.5em;
    }
    
    
    /* Button in de textborder */
    .btn-primary {
        color: var(--white);
        background-color: var(--black);
        border-color: var(--black);
    }
    .btn {
        padding: 0.375rem 1.22rem;
        letter-spacing: .23px;
    }
    .btn {
        display: inline-block;
        font-weight: 400;
        color: var(--white);
        text-align: center;
        vertical-align: middle;
        user-select: none;
        background-color: transparent;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        text-decoration: none;
        line-height: 1.5;
        border-radius: 0;
        background-color: var(--black);
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    
    .btn:not(:disabled):not(.disabled) {
        cursor: pointer;
    }
 
    /* Animatie hero text*/
    @keyframes text_reveal_box {
        50% {
            width: 100%;
            left: 0;
        }
        100% {
            width: 0;
            left: 100%;
        }
    }
    
    @keyframes text_reveal_name {
        100% {
        }
    }
    
    .hero-text span {
        position: relative;
        overflow: hidden;
        background-color: inherit; 
    }
    
    .hero-text span::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        background-color: inherit; 
        animation: text_reveal_box 2s ease forwards; 
    }
    
    .hero-text span {
        animation: text_reveal_name 1s ease forwards; 
    }
    
    /* Animatie hero info*/
    @keyframes info_reveal_box {
        0% {
            width: 0;
            left: 100%;
        }
        100% {
            width: 100%;
            left: 0;
        }
    }
    
    @keyframes info_reveal_box {
        50% {
            width: 100%;
            left: 0;
        }
        100% {
            width: 0;
            left: 100%;
        }
    }
    
    @keyframes info_reveal_name {
        100% {
        
        }
    }
    
    .hero-info {
        position: relative;
        overflow: hidden;
        background-color: var(--yellow); 
    }
    
    .hero-info::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: inherit; 
        animation: info_reveal_box 1.8s ease forwards; 
    }
    
    .hero-info {
        animation: info_reveal_name 1s ease forwards;
    }
    @media (max-width: 576px) {
    .hero-content {
        padding: 0 10px;
        flex-direction: column;
    }
    

}
/* Mobile to tablet */
@media (max-width: 680px) {
   
    .hero-content {
        padding: 0 10px;
        flex-direction: column;
    }
}
/* Animatie alleen activeren als de gebruiker geen voorkeur heeft voor verminderde beweging */
@media (prefers-reduced-motion: no-preference) {
    @keyframes text_reveal_box {
        50% {
            width: 100%;
            left: 0;
        }
        100% {
            width: 0;
            left: 100%;
        }
    }
    
    @keyframes text_reveal_name {
        100% {
        }
    }
    
    .hero-text span {
        position: relative;
        overflow: hidden;
        background-color: inherit; 
    }
    
    .hero-text span::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        background-color: inherit; 
        animation: text_reveal_box 2s ease forwards; 
    }
    
    .hero-text span {
        animation: text_reveal_name 1s ease forwards; 
    }
    
    /* Animatie hero info*/
    @keyframes info_reveal_box {
        0% {
            width: 0;
            left: 100%;
        }
        100% {
            width: 100%;
            left: 0;
        }
    }
    
    @keyframes info_reveal_box {
        50% {
            width: 100%;
            left: 0;
        }
        100% {
            width: 0;
            left: 100%;
        }
    }
    
    @keyframes info_reveal_name {
        100% {
        
        }
    }
    
    .hero-info {
        position: relative;
        overflow: hidden;
        background-color: var(--yellow); 
    }
    
    .hero-info::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: inherit; 
        animation: info_reveal_box 1.8s ease forwards; 
    }
    
    .hero-info {
        animation: info_reveal_name 1s ease forwards;
    }
}

</style>