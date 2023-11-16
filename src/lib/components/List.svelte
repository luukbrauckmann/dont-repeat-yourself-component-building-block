<script>
  export let players = []
  export let reversed = false

  $: reversedClass = reversed ? 'reversed' : ''
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
      <tr>
        <td>
          <span class="jersey-number">{player.jersey_number}</span>
        </td>
        <td>{player.name}</td>
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
      </tr>
    {/each}
  </tbody>
</table>

<style>
  thead {
    clip: rect(0 0 0 0); 
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; 
    width: 1px;
  }

   table {
		width: 100%;
		height: 100%;
		border-collapse: collapse;
		border: 1px solid transparent;
		border-radius: 1em;
		background: white;
	}

  table tbody {
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-between;
		height: 100%;
	}

  table tr {
		flex: 1 1 0px;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		border-bottom: 1px solid #d3d3d3;
	}

  table.reversed tr {
		flex-flow: row-reverse nowrap;
	}

  table td {
		padding: 0.5em;
	}

	table td:nth-child(2) {
		flex: 1;
	}

	table.reversed td:nth-child(2) {
		text-align: right;
	}

  .jersey-number,
  [class^="statistic-"] {
    --size: 2.167em;

    display: inline-block;
    padding: 0.5em;
    width: var(--size);
    height: var(--size);
    text-align: center;
    border: 1px solid black;
    border-radius: calc(1em - 0.5em);
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
