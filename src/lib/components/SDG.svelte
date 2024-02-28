<script>
	export let data;
</script>

<!-- De logo's -->
<section class="container-susDevGoal">
	<img
		class="susDevGoal"
		src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Sustainable_Development_Goal_01NoPoverty.svg/599px-Sustainable_Development_Goal_01NoPoverty.svg.png"
		alt="sustainable development goal 1"
	/>
	<a href="https://sdgs.un.org/goals">
		<img class="susDevGoal" src={data.wish.image.image.url} alt="Sustainable development goals" />
	</a>
</section>

<style>
	.susDevGoal {
		max-width: 50px;
		max-height: 50px;
		margin: 1em;
	}

	.container-susDevGoal {
		display: flex;
		flex-direction: row;
		margin-left: 1em;
	}
</style>
