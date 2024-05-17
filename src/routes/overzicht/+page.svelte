<script>
  export let data;

  import Navbar from '$lib/organism/navbar.svelte';
  import Overview from '$lib/organism/overview.svelte';
  import Footer from '$lib/organism/footer.svelte';
</script>



  <Navbar />
  <Overview {data} />
  <Footer />

  