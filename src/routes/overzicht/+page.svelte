<script>
  export let data;
  import Navbar from '$lib/Organism/navbar.svelte';
  import Overview from '$lib/Organism/overview.svelte';
  import Footer from '$lib/Organism/footer.svelte';
</script>



  <Navbar />
  <Overview {data} />
  <Footer />

  