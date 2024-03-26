<script>
  export let data;
  import Navbar from '$lib/Organism/Navbar.svelte';
  import Overview from '../../lib/Organism/Overview.svelte';
  import Footer from '$lib/Organism/Footer.svelte';
</script>



  <Navbar />
  <Overview {data} />
  <Footer />

  