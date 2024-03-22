<script>
    export let data;
    import { onMount } from "svelte";
    import Loader from '$lib/components/Loader.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import Carousel from '$lib/components/Carousel.svelte';
    import Footer from '$lib/components/Footer.svelte';
    
    onMount(() => {});
</script>
<Loader />
<Navbar />
<Hero  />
<Carousel {data}/>
<Footer />



