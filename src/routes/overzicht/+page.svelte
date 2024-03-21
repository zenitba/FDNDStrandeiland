<script>
    export let data;
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
	  import Overzicht from '../../lib/components/Overzicht.svelte';
  </script>
  
  

    <Navbar />
    <Overzicht {data} />
    <Footer />

  