<script>
    export let data;
    import { onMount } from "svelte";
    import { Navbar, Hero, Carousel, Footer, ViewTransition } from '$lib';
    
    onMount(() => {});
</script>
<ViewTransition />
<Navbar />
<Hero />
<Carousel {data}/>
<Footer />