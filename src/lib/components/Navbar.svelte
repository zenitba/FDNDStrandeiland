<header>
    <div class="nav-top">
        <div class="nav-top-links">
            <a href="https://hallostrandeiland.nl/plaatsen" tabindex="0">Iets plaatsen</a>
            <a href="https://hallostrandeiland.nl/aanmelden" tabindex="0">Inloggen of registreren</a>
        </div>
    </div>
    <nav aria-label="Hoofdnavigatie">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div class="navbar" tabindex="0">
        <img src="https://hallostrandeiland.nl/blobs/gebiedsplatform/w250h250/98691/2022/50/hseTekengebied_8.png"
        alt="Logo Strandeiland" width="55px" height="55px" loading="lazy">
       <input class="menu-btn" type="checkbox" id="menu-btn" />
       <label class="menu-icon" for="menu-btn" aria-label="Menu"><span class="navicon"></span></label>
          <ul class="menu">
            <li><a href="https://hallostrandeiland.nl/berichten" tabindex="0">Berichten</a></li>
            <li><a href="https://hallostrandeiland.nl/activiteiten" tabindex="0">Activiteiten</a></li>
            <li><a href="https://hallostrandeiland.nl/algemeen" tabindex="0">Over Strandeiland</a></li>
            <li><a href="https://hallostrandeiland.nl/planning" tabindex="0">Planning</a></li>
            <li><a href="https://hallostrandeiland.nl/overons" tabindex="0">Participatieteam</a></li>
            <li><a href="https://hallostrandeiland.nl/personen" tabindex="0">Personen</a></li>
            <li><a href="https://hallostrandeiland.nl/organisaties" tabindex="0">Organisaties</a></li>
            <li><a href="/" tabindex="0">Wensen</a></li>
          </ul>
      </div>
    </nav>
  </header>
  
  
<style>
  .nav-top {
    background-color: var(--dark-grey);
    display: flex;
    flex-direction: row;
    justify-content: end;
    height: 40px;
    padding: 8px 0;
    width: 100vw;
    font-size: .9rem;
}

.nav-top a {
    text-decoration: none;
    color: var(--white);
    border-bottom: 2px solid var(--white);
    margin-right: 10px;
    line-height: 1.5em;
}

.nav-top-links {
    display: flex;
    list-style: none;
    width: 55vw;
    justify-content: center;
    align-items: center;
}

nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: var(--white);
    border-bottom: 1px solid rgb(148, 148, 148);

}

img {
    height: 50px;
    width: 60px;
    max-width: 60px;
    overflow: hidden;
    margin: 0 20px;
}
nav ul{
    width: 72vw;
    /* display: flex;
    justify-content: space-evenly; */
}
/* .navbar ul.menu li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
} */

.navbar ul.menu {
    flex-grow: 1;
    padding: 0;
}

.navbar ul {
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
}

.navbar li a {
  display: inline-block; 
  text-align: center;  
  padding: 15px;
  text-decoration: none;
  color: black;
   /* align-items: center; */
}

nav .menu {
    clear: both;
    max-height: 0;
    transition: max-height .2s ease-out;
}

.navbar .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
}

.navbar .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background .2s ease-out;
    width: 18px;
}

.navbar .menu-icon .navicon:before,
.navbar .menu-icon .navicon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
}

.navbar .menu-icon .navicon:before {
    top: 5px;
}

.navbar .menu-icon .navicon:after {
    top: -5px;
}

.navbar .menu-btn {
    display: none;
}

.navbar .menu-btn:checked ~ .menu {
    max-height: 480px;
}

.navbar .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
}

.navbar .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
}

.navbar .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
}

.navbar .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.navbar .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
}

@media screen and (min-width: 800px) {
    .navbar li {
        float: left;
    }

    .navbar .menu {
        clear: none;
        float: right;
        max-height: none;
    }

    .navbar .menu-icon {
        display: none;
    }

}

@media screen and (max-width: 800px) {
    .navbar {
        width: 100%;
    }
}
@media (max-width: 680px) {
    .nav-top-links {
        width: 100%;
        display: flex;  
        justify-content: end;
    }
   
}
  /* Style voor tabben */
  .navbar:focus,
  .nav-top a:focus,
  .navbar ul.menu li a:focus {
    outline: 2px solid darkblue;
    /* outline-offset: 2px; */
  }
</style>