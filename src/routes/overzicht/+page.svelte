<script>
    export let data;
    import Navbar from '$lib/components/Navbar.svelte';
    import Overview from '../../lib/components/Overview.svelte';
    import Footer from '$lib/components/Footer.svelte';
  </script>
  
  

    <Navbar />
    <Overview {data} />
    <Footer />

  