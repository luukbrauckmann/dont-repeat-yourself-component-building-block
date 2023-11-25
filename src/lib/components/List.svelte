<script>
  export let players = []
  export let reversed = false

  $: reversedClass = reversed ? 'reversed' : ''

  let showPlayerInfo = (player) => {
    console.log(player)
  }
</script>

<table class="{reversedClass}">
  <thead>
    <tr>
      <th>Number</th>
      <th>Name</th>
      <th>Goals</th>
      <th>Assists</th>
      <th>Blocks</th>
      <th>Turnovers</th>
    </tr>
  </thead>
  <tbody>
    {#each players as player}
      <tr on:click={showPlayerInfo(player)}>
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
        {#if true}
          <td colspan="6">
            Extra verhaal en statstieken.
          </td>
        {/if}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    --border-radius: 1em;

		width: 100%;
		height: 100%;
		border-collapse: collapse;
		border-radius: var(--border-radius);
		background: white;
	}

  thead {
    clip: rect(0 0 0 0); 
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; 
    width: 1px;
  }

  tbody {
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
		height: 100%;
	}

  tr {
		flex: 1 1 0px;
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		border: 1px solid transparent;
		border-bottom-color: #d3d3d3;
    cursor: pointer;

    transition: all 0.2s ease-in-out;
	}

  .reversed tr {
		flex-flow: row-reverse wrap;
	}

  tr:first-child {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  tr:last-child {
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }

  tr:hover {
    background: #f4f5fa;
    border-color: #d3d3d3;
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

  td[colspan="6"] {
    flex-basis: 100%;
  }

  .player-name {
    white-space: nowrap;
  }

  .jersey-number,
  [class^="statistic-"] {
    --size: 2.125em;

    display: inline-block;
    padding: 0.5em;
    width: var(--size);
    height: var(--size);
    text-align: center;
    border: 1px solid black;
    border-radius: calc(var(--border-radius) - 0.5em);
    line-height: 1;
    vertical-align: middle;
  }

  [class^="statistic-"] {
    --color: white;

    color: white;
    background: var(--color);
    border-color: var(--color);
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

  [class^="statistic-"]:empty {
    --color: #f4f5fa;
  }

  .statistics {
    display: flex;
    flex-flow: column nowrap;
  }

  .statistics__content {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    gap: 1em;
  }

</style>
