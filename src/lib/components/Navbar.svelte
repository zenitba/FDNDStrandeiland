<header>
    <div class="nav-top">
     <div class="nav-top-links">
     <a href="">Iets plaatsen</a>
     <a href="">Inloggen of registreren</a>
    </div>
    </div>
    <nav>      
      <div class="navbar">
     <img src="https://hallostrandeiland.nl/blobs/gebiedsplatform/w250h250/98691/2022/50/hseTekengebied_8.png" alt="Logo Strandeiland" width="55px" height="55px" loading="lazy">
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
    width: 580px;
    justify-content: center;
    align-items: center;
}

nav{
	display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
	width: 100%;
    background-color: var(--white);
}


  img {
      display: flex;
    float: left;
    font-size: 2em;
    padding: 0 20px;
    width: 100px;
  }
  img .logo{
    display: flex;
    align-items: center;
  }
    
 /* .navbar {
    background-color: #fff;
    box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
    position: fixed;
    width: 100%;
    z-index: 3;

  } */
  
 .navbar ul {
    /* margin: 0 20px; */
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
    /* display: inline-block; */

  }
  
 .navbar li a {
    /* display: block; */
    display: inline-block;
    padding: 15px 25px;
    /* border-right: 1px solid #f4f4f4; */
    text-decoration: none;
    color: black;
  }
  
 /* .navbar li a:hover,
 .navbar .menu-btn:hover {
    background-color: #f4f4f4;
  } */
  
  
/* menu */

nav .menu {
    clear: both;
    max-height: 0;
    transition: max-height .2s ease-out;
  }
  
  /* menu icon */
  
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
  
  /* menu btn */
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
   /* .navbar li a {
      padding: 10px;
    } */
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
    .navbar{
        width: 100%;
    }
  }
  
  @media screen and (max-width: 800px) {
   
   .navbar li a {
      padding: 10px;
    }
  }
</style>