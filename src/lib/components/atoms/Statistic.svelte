<script>
	export let number = 0;
	export let type = 'goals';
</script>

<span class={type}>{number}</span>

<style>
	span {
		--color: white;

		display: inline-block;
		vertical-align: middle;
		box-sizing: content-box;
		border: 1px solid var(--color);
		border-radius: calc(var(--border-radius) - 0.5em);
		background: var(--color);
		padding: 0.5em;
		width: 1rem;
		height: 1rem;
		color: white;
		line-height: 1;
		text-align: center;
	}

	.goals {
		--color: #18d02b;
	}

	.assists {
		--color: #2974e4;
	}

	.blocks {
		--color: #ed4444;
	}

	.turnovers {
		--color: #ffc738;
	}

	span:empty {
		--color: #f4f5fa;
	}
</style>
