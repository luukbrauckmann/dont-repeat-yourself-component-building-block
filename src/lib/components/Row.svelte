<script>
	import { slide } from 'svelte/transition';

	export let player;
	export let reversed;

	let open = false;
	let toggle = () => (open = !open);

	$: reversedClass = reversed ? 'reversed' : '';
</script>

<tr on:click={toggle} class={reversedClass}>
	<td>
		<span class="jersey-number">{player.jersey_number}</span>
	</td>
	<td class="player-name">{player.name}</td>
	<td>
		<span class="statistic-goals">{player.goals}</span>
	</td>
	<td>
		<span class="statistic-assists">{player.assists}</span>
	</td>
	<td>
		<span class="statistic-blocks">{player.blocks}</span>
	</td>
	<td>
		<span class="statistic-turnovers">{player.turnovers}</span>
	</td>
	{#if open}
		<td transition:slide={{ duration: 200 }} colspan="6"> Extra verhaal en statstieken. </td>
	{/if}
</tr>

<style>
	tr {
		display: flex;
		flex: 1 1 0px;
		flex-flow: row wrap;
		align-items: center;
		transition: all 0.2s ease-in-out;
		cursor: pointer;
		border: 1px solid transparent;
		border-bottom-color: #d3d3d3;
	}

	.reversed {
		flex-flow: row-reverse wrap;
	}

	tr:first-child {
		border-top-right-radius: var(--border-radius);
		border-top-left-radius: var(--border-radius);
	}

	tr:last-child {
		border-bottom-right-radius: var(--border-radius);
		border-bottom-left-radius: var(--border-radius);
	}

	tr:hover {
		border-color: #d3d3d3;
		background: #f4f5fa;
	}

	tr:has(+ tr:hover) {
		border-bottom-color: transparent;
	}

	td {
		padding: 0.5em;
	}

	td:nth-child(2) {
		flex: 1;
	}

	.reversed td:nth-child(2) {
		text-align: right;
	}

	td[colspan='6'] {
		flex-basis: 100%;
	}

	.player-name {
		white-space: nowrap;
	}

	.jersey-number,
	[class^='statistic-'] {
		--size: 2.125em;

		display: inline-block;
		vertical-align: middle;
		border: 1px solid black;
		border-radius: calc(var(--border-radius) - 0.5em);
		padding: 0.5em;
		width: var(--size);
		height: var(--size);
		line-height: 1;
		text-align: center;
	}

	[class^='statistic-'] {
		--color: white;
		border-color: var(--color);
		background: var(--color);

		color: white;
	}

	.statistic-goals {
		--color: #18d02b;
	}

	.statistic-assists {
		--color: #2974e4;
	}

	.statistic-blocks {
		--color: #ed4444;
	}

	.statistic-turnovers {
		--color: #ffc738;
	}

	[class^='statistic-']:empty {
		--color: #f4f5fa;
	}
</style>
