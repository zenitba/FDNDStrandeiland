<script>
    import Navbar from '$lib/components/Navbar.svelte';
	import Reactie from '$lib/components/Reactie.svelte';
	import Rollen from '$lib/components/Rollen.svelte';
	import Status from '$lib/components/Status.svelte';
	import Sdg from '$lib/components/SDG.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { writable } from 'svelte/store';

	export let data;
	export const test = writable(1);

	// console.log(data);
</script>
<!-- Wensen layout -->
<Navbar />

<span class="btn btn-back">
	<a href="/">
	  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
		  <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"/></svg>
	  Terug</a>
  </span>
  <section id="wensen" class="wensen">
  <header>
	<p>Wens</p>
	<h2>{data.wish.heading}</h2>
	  <mark>{data.wish.label}</mark>
	</header>
	<img src={data.wish.image.url} alt="foto van {data.wish.heading}" />
	<div class="wrapper">
	  <time>
			  <svg
				  xmlns="http://www.w3.org/2000/svg"
				  class="icon icon-tabler icon-tabler-flag-2"
				  width="24"
				  height="24"
				  viewBox="0 0 24 24"
				  stroke-width="2"
				  stroke="currentColor"
				  fill="none"
				  stroke-linecap="round"
				  stroke-linejoin="round"
			  >
				  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
				  <path d="M5 14h14v-9h-14v16" />
			  </svg>
		Geplaatst op: {data.wish.date}
	  </time>
		<div class="description">
			<p>{data.wish.description}</p>
		</div>
		<Sdg {data} /> 
		<Rollen />
		<Status {data} />
	  <br>
  </div>
  </section>
  <Footer />

  <style>
  section{
  /* padding: var(--unit-default); */
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,0.125);
  border-radius: 0;
  /* margin: 5% 8% 1.3rem; */
  max-width: 38rem;
  }
  .wrapper{
   margin: 0 8% 1.3rem;

  }
  header{
  margin: 5% 8% 2.5rem;
  display: block;
  }
  
  header p{
  font-variant-caps: all-small-caps;
  letter-spacing: 1px;
  font-size: 92%;
  margin: 0 0 1.6rem 0;
  }
  
  header h2{
  font-size: 2rem;
  line-height: 1.17;
  font-weight: 800;
  margin-bottom: 1.52rem;
  }
  
  header mark{
  font-size: 90%;
  line-height: 126%;
  width: 68%;
  }
  img{
    max-width: 100%;
  }
  .btn{
  display: inline-block;
  font-weight: 400;
  color: #333;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0;
  transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
  }
  
  span{
  padding-left: 0;
  padding-right: 0;
  display: inline-flex;
  align-items: center; 
  }
  
  .btn-back{
  padding: 0.375rem 1.22rem;
  letter-spacing: .23px;
  }
  
  time {
  display: flex;
  align-items: center;
  gap: var(--unit-small);
  padding: 1em 0em 1em 0em;
  margin: 2% 0%;
  }
  
   
  </style>
	