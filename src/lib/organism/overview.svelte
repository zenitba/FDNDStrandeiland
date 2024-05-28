<script>

	import Filter from '$lib/molecul/filter.svelte';
    import { SvgSupport } from '$lib';

	export let data;

	let filteredWishes = data.wishes;

	function handleFilter(event) {
		const { label } = event.detail;

		filteredWishes = data.wishes.filter((wish) => {
			const matchesLabel = wish.label.toLowerCase().includes(label.toLowerCase());

			return matchesLabel;
		});
	}
</script>

<!-- Header sectie -->
<div class="header">
	<h2 class="header-h2">Ideeën voor Strandeiland</h2>
	<p class="header-p">
		Alle ideeën voor Strandeiland worden hier verzameld. Geef aan welke ideeën jij goed vindt. Als
		je je ergens voor wilt inzetten, kan je dat ook aangeven.
	</p>
	<a href="https://hallostrandeiland.nl/plaatsen" role="button" class="header-btn">
		Voeg een idee toe
	</a>
</div>

<!-- Knoppen voor grid- en lijstweergave -->
<button class="grid-btn">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="icon icon-tabler icon-tabler-layout-grid"
		viewBox="0 0 24 24"
		stroke-width="2"
		stroke="#000000"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
		<path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
		<path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
		<path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
	</svg>
	Grid View
</button>

<button class="list-btn">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="icon icon-tabler icon-tabler-layout-list"
		viewBox="0 0 24 24"
		stroke-width="2"
		stroke="#000000"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
		<path d="M4 14m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
	</svg>
	List View
</button>

<!-- Filter component -->
<Filter on:applyFilter={handleFilter} />

<!-- Grid container voor de weergave van ideeën -->
<section class="grid-container">
    {#each filteredWishes as wish}
		<div class="grid-item">
			<!-- Afbeelding container -->
			<div class="image-container">
				<img src={wish.image.url} alt={wish.heading} decoding="async" loading="lazy" />
			</div>
			<!-- Tekst container -->
			<div class="text-container">
				<h3><a href={`/overzicht/wens/${wish.id}`}>{wish.heading}</a></h3>
				<p>{wish.description}</p>
				<time>
                    <SvgSupport  />
					<span class="support">Supporters: 4</span>
				</time>
				{#if wish.image && wish.image.image && wish.image.image.url}
					<a class="sdgImage" href="https://sdgs.un.org/goals">
						<img
							class="susDevGoal"
							src={wish.image.image.url}
							alt={wish.image.label}
							width="50"
							height="50"
							loading="lazy"
						/>
					</a>
				{/if}
			</div>
		</div>
	{/each}
</section>

<style>
	/* CSS-stijlen voor de header */
	.header {
		display: table;
		table-layout: fixed;
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;
		margin-top: 2.4rem;
		margin-bottom: 2.4rem;
		padding: 2.5rem 1.2rem;
		background-color: white;
		border-radius: 0;
		width: 90%;
	}

	/* Stijlen voor de header h2 */
	.header-h2 {
		font-weight: 800;
		font-size: 2rem;
		line-height: 1.17;
		margin-bottom: 1.52rem;
	}

	/* Stijlen voor de header paragraaf */
	.header-p {
		font-weight: 300;
		margin-top: 0;
		margin-bottom: 1rem;
		font-size: 18px;
		line-height: 1.5em;
	}

	/* Stijlen voor de header knop */
	.header-btn {
		display: inline-flex;
		float: inline-end;
		align-items: center;
		background: var(--yellow);
		color: var(--black);
		border-radius: 0%;
		font-size: 1rem;
		font-weight: bold;
		transition:
			transform 0.2s,
			background-color 0.2s;
		padding: 0.55em 1.6em;
	}

	.header-btn:hover {
		background-color: var(--black);
		color: var(--yellow);
		transform: scale(1.1);
	}

	/* Stijlen voor de grid-container */
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 20px;
		margin-right: auto;
		margin-left: auto;
		margin-bottom: 50px;
		width: 90%;
	}

	/* Stijlen voor de grid-item */
	.grid-item {
		background-color: #ffffff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: fit-content;
        width: 22em;
		transition:
			transform 0.2s,
			background-color 0.2s;
	}
	.grid-item:hover {
		transform: scale(1.1);
	}

	/* Stijlen voor afbeeldingen binnen grid-items */
	.grid-item img {
		max-width: 100%;
		height: auto;
	}

	/* Stijlen voor de afbeeldingscontainer */
	.image-container {
		width: 100%;
		height: auto;
		text-align: center;
	}

	/* Stijlen voor afbeeldingen binnen afbeeldingscontainer */
	.image-container img {
		width: 100%;
		height: 200px;
	}

	/* Stijlen voor de tekstcontainer */
	.text-container {
		padding: 5px 20px;
	}

	/* Stijlen voor kopjes en paragrafen binnen tekstcontainer */
	.text-container h3,
	.text-container p {
		margin: 10px 0;
		color: #333;
		word-wrap: break-word;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/* Stijlen voor tijd en supporters binnen tekstcontainer */
	.text-container time {
		display: flex;
		align-items: center;
		margin: 15px -10px;
	}

	/* Stijlen voor het aantal supporters binnen tekstcontainer */
	.text-container .support {
		font-weight: 600;
	}

	/* Stijlen voor knoppen */
	button,
	.list-btn,
	.grid-btn {
		display: inline-block;
		cursor: pointer;
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
		margin-bottom: 20px;
		color: var(--black);
		background-color: var(--yellow);
		transition:
			transform 0.2s,
			background-color 0.2s;
	}

	/* Specifieke stijlen voor grid-btn */
	.grid-btn {
		margin-left: 70px;
	}
	.list-btn {
		margin-left: 10px;
	}
	/* Stijlen voor SVG's binnen knoppen */
	button svg {
		width: 21px;
	}

	/* Stijlen voor SVG's binnen knoppen bij hover */
	button:hover svg path {
		fill: var(--yellow);
	}

	/* Stijlen voor knoppen bij hover */
	button:hover {
		background-color: var(--black);
		color: var(--yellow);
	}

	/* Stijlen voor grid-items bij focus op lijstweergaveknop */
	.list-btn:focus ~ .grid-container {
		display: flex;
		flex-direction: column;
	}

	.list-btn:focus ~ .grid-container .grid-item img {
		width: 100%;
		height: 100%;
	}

	.list-btn:focus ~ .grid-container .grid-item {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: center;
		justify-items: center;
		margin-left: auto;
		margin-right: auto;
	}

	.list-btn:focus ~ .grid-container .grid-item .image-container {
		width: 30%;
	}

	.list-btn:focus ~ .grid-container .grid-item .text-container {
		width: 70%;
	}

	.list-btn:focus ~ .grid-container .grid-item .text-container p {
		overflow: hidden;
		text-overflow: ellipsis;
		word-wrap: normal;
		white-space: wrap;
	}

	.grid-container.list-view .grid-item .sdgImage .susDevGoal {
		width: 30px;
		height: 30px;
	}

	@media screen and (max-width: 768px) {
		.list-btn,
		.grid-btn {
			display: none;
		}
	}

	@media screen and (max-width: 330px) {
		.grid-container {
			margin: 0 10px;
		}
	}
</style>