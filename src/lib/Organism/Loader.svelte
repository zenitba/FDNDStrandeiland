<!-- <script>
  import { onMount } from 'svelte';

  onMount(() => {
    // Wacht een korte tijd voordat u de 'loaded'-class toevoegt
    setTimeout(() => {
      // Controleren of window beschikbaar is
      if (typeof window !== 'undefined') {
        document.querySelector('body').classList.add('loaded');
      }
    }, 100); // Wacht 100 milliseconden voordat de class wordt toegevoegd
  });
</script>

<div class="preloader">
  <div class="loader-wrapper">
    <div class="loader"></div>
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
  </div>
</div>
 <style>
 
 /* Loader Styles start here */
 .loader-wrapper {
   --line-width: 5px;
   --curtain-color: #F0F0E9;
   --outer-line-color: #FFE704;
   --middle-line-color: #019CE0;
   --inner-line-color: #000000;
   position:fixed;
   top:0;
   left:0;
   width:100%;
   height:100%;
   z-index:1000;
 }
 
 .loader {
   display:block;
   position: relative;
   top:50%;
   left:50%;
   width:150px;
   height:150px;
   margin:-75px 0 0 -75px;
   border:var(--line-width) solid transparent;
   border-top-color: var(--outer-line-color);
   border-radius:100%;
   -webkit-animation: spin 2s linear infinite;
           animation: spin 2s linear infinite;
   z-index:1001;
 }
 
 .loader:before {
   content:"";
   position: absolute;
   top:4px;
   left:4px;
   right:4px;
   bottom:4px;
   border:var(--line-width) solid transparent;
   border-top-color: var(--inner-line-color);
   border-radius:100%;
   -webkit-animation: spin 3s linear infinite;
   animation: spin 3s linear infinite;
 }
 
 .loader:after {
   content:"";
   position: absolute;
   top:14px;
   left:14px;
   right:14px;
   bottom:14px;
   border:var(--line-width) solid transparent;
   border-top-color: var(--middle-line-color);
   border-radius:100%;
   -webkit-animation: spin 1.5s linear infinite;
   animation: spin 1.5s linear infinite;
   
 }
 
 @-webkit-keyframes spin {
   0%   { 
     -webkit-transform: rotate(0deg); 
       -ms-transform: rotate(0deg); 
           transform: rotate(0deg);
   }
   100% { 
     -webkit-transform: rotate(360deg); 
       -ms-transform: rotate(360deg); 
           transform: rotate(360deg);
   }
 }
 @keyframes spin {
   0%   { 
     -webkit-transform: rotate(0deg); 
       -ms-transform: rotate(0deg); 
           transform: rotate(0deg);
   }
   100% { 
     -webkit-transform: rotate(360deg); 
       -ms-transform: rotate(360deg); 
           transform: rotate(360deg);
   }
 }
 
 .loader-wrapper .loader-section {
   position:fixed;
   top:0;
   background:var(--curtain-color);
   width:51%;
   height:100%;
   z-index:1000;
 }
 
 .loader-wrapper .loader-section.section-left {
   left:0
 }
 .loader-wrapper .loader-section.section-right {
   right:0;
 }
 
 /* Loaded Styles */ 
 .loaded .loader-wrapper .loader-section.section-left {
   transform: translateX(-100%);
   transition: all 0.7s 0.3s cubic-bezier(0.645,0.045,0.355,1.000);
 }
 .loaded .loader-wrapper .loader-section.section-right {
   transform: translateX(100%);
   transition: all 0.7s 0.3s cubic-bezier(0.645,0.045,0.355,1.000);
 }
 .loaded .loader {
   opacity: 0;
   transition: all 0.3s ease-out;
 }
 .loaded .loader-wrapper {
   visibility: hidden;
   transform:translateY(-100%);
   transition: all .3s 1s ease-out;
 }
  /* Geladen stijlen */
  .loaded .loader-wrapper .loader {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }

  .loaded .loader-wrapper .loader-section {
    transform: translateY(-100%);
    transition: transform 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
  }

  .loaded .loader-wrapper {
    visibility: hidden;
    transform: translateY(-100%);
    transition: visibility 0s 1s, transform 0.3s 1s ease-out;
  }
 </style> -->