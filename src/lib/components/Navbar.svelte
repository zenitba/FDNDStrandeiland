
<header class="header">
    <div class="nav-top">
     <div class="nav-top-links">
     <a href="">Iets plaatsen</a>
     <a href="">Inloggen of registreren</a>
    </div>
    </div>
    <nav>       
     <img src="https://hallostrandeiland.nl/blobs/gebiedsplatform/w250h250/98691/2022/50/hseTekengebied_8.png" alt="Logo Strandeiland" width="65px" height="65px" loading="lazy">
     <input class="menu-btn" type="checkbox" id="menu-btn" />
     <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
     <ul class="menu">
         <li><a href="">Berichten</a></li>
         <li><a href="">Activiteiten</a></li>
         <li><a href="">Over Strandeiland</a></li>
         <li><a href="">Planning</a></li>
         <li><a href="">Participatieteam</a></li>
         <li><a href="">Personen</a></li>
         <li><a href="">Organisaties</a></li>
         <li><a href="">Wensen</a></li>
     </ul>
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
    width: 320px;
    justify-content: center;
    align-items: center;
}

  img {
    display: flex;
    float: left;
    font-size: 2em;
    padding: 0 20px;
    width: 100px;
  }
  
  /* header */
  
  .header {
    background-color: #fff;
    box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
    position: fixed;
    /* justify-content: space-evenly; */
    width: 100%;
    z-index: 3;

  }
  
  .header ul {
    margin: 0 20px;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
    /* display: inline-block; */

  }
  
  .header li a {
    display: block;
    display: inline-block;
    padding: 20px 20px;
    /* border-right: 1px solid #f4f4f4; */
    text-decoration: none;
    color: black;
  }
  
  .header li a:hover,
  .header .menu-btn:hover {
    background-color: #f4f4f4;
  }
  
  
/* menu */

.header .menu {
    clear: both;
    max-height: 0;
    transition: max-height .2s ease-out;
  }
  
  /* menu icon */
  
  .header .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }
  
  .header .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background .2s ease-out;
    width: 18px;
  }
  
  .header .menu-icon .navicon:before,
  .header .menu-icon .navicon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
  }
  
  .header .menu-icon .navicon:before {
    top: 5px;
  }
  
  .header .menu-icon .navicon:after {
    top: -5px;
  }
  
  /* menu btn */
  
  .header .menu-btn {
    display: none;
  }
  
  .header .menu-btn:checked ~ .menu {
    max-height: 500px;
  }
  
  .header .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }
  
  .header .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }
  
  .header .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }
  
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }
  
    
  @media screen and (min-width: 850px) {
    .header li {
      float: left;
    }
    .header li a {
      padding: 20px 30px;
    }
    .header .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .header .menu-icon {
      display: none;
    }
  }
  </style>