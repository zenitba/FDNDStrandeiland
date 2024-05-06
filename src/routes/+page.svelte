<script>
    export let data;
    import { onMount } from "svelte";
    import Loader from '$lib/Organism/Loader.svelte';
    import Navbar from '$lib/Organism/Navbar.svelte';
    import Hero from '$lib/Organism/Hero.svelte';
    import Carousel from '$lib/Organism/Carousel.svelte';
    import Footer from '$lib/Organism/Footer.svelte';
    
    onMount(() => {});
</script>
<Loader />
<Navbar />
<Hero  />
<Carousel {data}/>
<Footer />

