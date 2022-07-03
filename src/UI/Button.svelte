<button type="button" on:click>
	<slot />
</button>

<style>
	button {
		border: 2px var(--ghost-white) solid;
		border-radius: var(--radii-full);
		color: var(--ghost-white);
		cursor: pointer;
		font-family: var(--ff-display);
		font-size: 1rem;
		font-weight: 500;
		padding: 0.5rem 0.75rem;
	}

	button:hover {
		background-color: var(--ghost-white);
		color: var(--night-black);
	}
</style>
