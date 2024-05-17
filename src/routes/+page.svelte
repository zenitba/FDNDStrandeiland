<script>
    export let data;
    import { onMount } from "svelte";
    import Navbar from '$lib/organism/navbar.svelte';
    import Hero from '$lib/organism/hero.svelte';
    import Carousel from '$lib/organism/carousel.svelte';
    import Footer from '$lib/organism/footer.svelte';
    
    onMount(() => {});
</script>
<Navbar />
<Hero  />
<Carousel {data}/>
<Footer />

