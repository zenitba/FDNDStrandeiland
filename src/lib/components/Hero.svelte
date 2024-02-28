<script>

</script>
<!-- Hero -->
<section class="hero">
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
                <a href="https://hallostrandeiland.nl/plaatsen" class="btn btn-primary">Deel jouw Strandeiland-info</a>
            </div>
        </div>
    </div>
</section>
<style>
    /* Hero */
.hero {
    background-image: url("https://hallostrandeiland.nl/networks/hallostrandeiland/img/hse_hero-bg.webp");
    background-image: url("https://hallostrandeiland.nl/networks/hallostrandeiland/img/hse_hero-bg.png");
    background-image: url("https://hallostrandeiland.nl/networks/hallostrandeiland/img/hse_hero-bg.avif");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 6rem 0 3rem;
    background-position: center;
    display: flex;

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
</style>