<script>

    import { onMount } from 'svelte';
  
    onMount(() => {
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    hamburger.classList.toggle("toggle");
});
});


  </script>
  
  <header>
      <div class="nav-top">
          <div class="nav-top-links">
              <a href="/">Iets plaatsen</a>
              <a href="/">Inloggen of registreren</a>
          </div>
      </div>
      <nav>
          <div class="logo">
              <img src="https://hallostrandeiland.nl/blobs/gebiedsplatform/w250h250/98691/2022/50/hseTekengebied_8.png" alt="Logo Strandeiland" width="45px" height="45px" loading="lazy">
          </div>
          <div class="hamburger">
              <div class="line1"></div>
              <div class="line2"></div>
              <div class="line3"></div>
          </div>
          <ul class="nav-links">
              <li><a href="/">Berichten</a></li>
              <li><a href="/">Activiteiten</a></li>
              <li><a href="/">Over Strandeiland</a></li>
              <li><a href="/">Planning</a></li>
              <li><a href="/">Participatieteam</a></li>
              <li><a href="/">Personen</a></li>
              <li><a href="/">Organisaties</a></li>
              <li><a href="/">Wensen</a></li>
          </ul>
      </nav>
  </header>
  <style>
    header{
        height: 100px;
    }
  /* Nav top */
  .nav-top {
      background-color: var(--dark-grey);
      display: flex;
      flex-direction: row;
      justify-content: end;
      height: 40px;
      padding: 8px 0; 
      width:100vw;
      font-size: .9rem;
  
  }
  .nav-top a {
      text-decoration: none;
      color: var(--white);
      border-bottom: 2px solid var(--white);
      margin-right: 10px; 
      line-height: 1.5em;
  
  }
  .nav-top-links{
      display: flex;
      list-style: none;
      width: 38vw;
      justify-content: center;
      align-items: center;
  }
  /* Navbar */
  nav{
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 57px;
      border-width: 0.5px;
      position: fixed;
      z-index: 10;
      width: 100vw;
      background-color: var(--white);
      position: absolute;
  }
  
  /*Logo*/
  .logo{
      display: flex;
      align-items: center;
  
  }
  .logo img {
      height: 3.5rem;
      width: 3.5rem;
  }
  
  /*Navbar Links*/
  .nav-links{
      display: flex;
      list-style: none; 
      width: 83vw;
      justify-content: space-evenly;
      align-items: center;
      gap: 0;
  }
  .nav-links li a{
      text-decoration: none;
      color: #000000;
      font-weight: bold;
      font-weight: var(--font-weight-400);
      font-size: 15px;
  }
  
  /*Hamburger Icon*/
  .hamburger div{
      width: 30px;
      height:3px;
      background: var(--black);
      margin: 5px;
      transition: all 0.3s ease;
  }
  .hamburger{
      display: none;
  }
  
  /*Animatie Hamburger Icon*/
  .toggle .line1{
      transform: rotate(-45deg) translate(-5px,6px);
  }
  .toggle .line2{
      transition: all 0.7s ease;
      width:0;
  }
  .toggle .line3{
      transform: rotate(45deg) translate(-5px,-6px);
  }
  
  </style> 