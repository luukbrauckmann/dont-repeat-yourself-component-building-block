<script>
	import { slide } from 'svelte/transition';
	import JerseyNumber from '$lib/components/atoms/JerseyNumber.svelte';
	import Statistic from '$lib/components/atoms/Statistic.svelte';

	export let player;
	export let reversed;

	let open = false;
	let toggle = () => (open = !open);
</script>

<tr class:reversed on:click={toggle}>
	<td>
		<JerseyNumber number={player.jersey_number} />
	</td>
	<td class="player-name">{player.name}</td>
	<td>
		<Statistic number={player.goals} type={'goals'} />
	</td>
	<td>
		<Statistic number={player.assists} type={'assists'} />
	</td>
	<td>
		<Statistic number={player.blocks} type={'blocks'} />
	</td>
	<td>
		<Statistic number={player.turnovers} type={'turnovers'} />
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

	.reversed td:nth-child(2) {
		text-align: right;
	}

	td[colspan='6'] {
		flex-basis: 100%;
	}

	.player-name {
		flex: 1;
		white-space: nowrap;
	}
</style>
