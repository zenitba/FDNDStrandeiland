<script>
    export let data;
    import { onMount } from "svelte";
    import Navbar from '$lib/Organism/navbar.svelte';
    import Hero from '$lib/Organism/hero.svelte';
    import Carousel from '$lib/Organism/carousel.svelte';
    import Footer from '$lib/Organism/footer.svelte';
    
    onMount(() => {});
</script>
<Navbar />
<Hero  />
<Carousel {data}/>
<Footer />

