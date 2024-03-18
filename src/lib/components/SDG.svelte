<script>
	export let data;
  </script>
  
  <!-- De logo's -->
  <section class="container-susDevGoal">
	<!-- Eerste afbeelding -->
	<img
	  class="susDevGoal"
	  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Sustainable_Development_Goal_01NoPoverty.svg/599px-Sustainable_Development_Goal_01NoPoverty.svg.png"
	  alt="sustainable development goal 1"
	  width="50"
	  height="50"
	  loading="lazy"

	/>
  
	<!-- Tweede afbeelding met lazy loading in een picture element -->
	<picture>
	  <source srcset={data.wish.image.image.url} type="image/webp">
	  <source srcset={data.wish.image.image.url.replace('.png', '.jpg')} type="image/jpeg">
	  <img
		class="susDevGoal"
		src={data.wish.image.image.url}
		alt="Sustainable development goals"
		width="50"
		height="50"
		loading="lazy"

	  />
	</picture>
  </section>
  
  <style>
	.susDevGoal {
	  max-width: 50px;
	  max-height: 50px;
	  margin: 1em 1em 0 0;
	}
  
	.container-susDevGoal {
	  display: flex;
	  flex-direction: row;
	}
  </style>
  
