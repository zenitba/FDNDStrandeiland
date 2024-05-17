<script>
    export let data;
    import { onMount } from "svelte";
    import Loader from '$lib/organism/Loader.svelte';
    import Navbar from '$lib/organism/Navbar.svelte';
    import Hero from '$lib/organism/Hero.svelte';
    import Carousel from '$lib/organism/Carousel.svelte';
    import Footer from '$lib/organism/Footer.svelte';
    
    onMount(() => {});
</script>
<Loader />
<Navbar />
<Hero  />
<Carousel {data}/>
<Footer />

