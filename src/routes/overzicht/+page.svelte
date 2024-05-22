<script>
    export let data;
  
    import { Navbar, Overview, Footer } from '$lib';
  </script>
  
  <Navbar />
  <Overview {data} />
  <Footer />
  
  