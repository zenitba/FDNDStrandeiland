<script>
    export let data;
    import { onMount } from "svelte";
    import { Navbar, Hero, Carousel, Footer } from '$lib';
    
    onMount(() => {});
</script>

<Navbar />
<Hero />
<Carousel {data}/>
<Footer />