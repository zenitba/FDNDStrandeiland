<script>
  export let data;
  import Navbar from '$lib/organism/Navbar.svelte';
  import Overview from '../../lib/organism/Overview.svelte';
  import Footer from '$lib/organism/Footer.svelte';
</script>



  <Navbar />
  <Overview {data} />
  <Footer />

  