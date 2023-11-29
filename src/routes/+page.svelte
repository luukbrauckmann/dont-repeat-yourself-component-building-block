<script>
	import PlayersList from '$lib/components/organisms/PlayersList.svelte';

	const players = Array.from({ length: 20 }, (_, index) => ({
		jersey_number: index + 1,
		name: 'Luuk Brauckmann',
		goals: 1,
		assists: 2,
		blocks: 3,
		turnovers: 4
	}));
</script>

<main>
	<PlayersList {players} />
	<PlayersList {players} reversed={true} />
</main>

<style>
	@import '$lib/styles/global.css';

	main {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 3rem;
		padding: 1rem;
	}
</style>
