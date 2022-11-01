<script>
	import ProjectCard from '$components/ProjectCard.svelte';
	import { projects } from '$data/projects';
	import { divideArray } from '$utils/array';

	let numShown = 9;
	$: slicedProjects = projects.slice(0, numShown);
</script>

<section id="projects">
	<div class="container">
		<div class="grid grid-sm">
			<div class="column">
				{#each slicedProjects as project}
					<ProjectCard {...project} />
				{/each}
			</div>
		</div>

		<div class="grid grid-md">
			{#each divideArray(slicedProjects, 2) as projectGroup, i}
				<div class="column">
					{#each projectGroup as project}
						<ProjectCard {...project} animationDelay="{i * 100}ms" />
					{/each}
				</div>
			{/each}
		</div>

		<div class="grid grid-lg">
			{#each divideArray(slicedProjects, 3) as projectGroup, i}
				<div class="column">
					{#each projectGroup as project}
						<ProjectCard {...project} animationDelay="{i * 100}ms" />
					{/each}
				</div>
			{/each}
		</div>
		<div class="show-more">
			<button class:hidden={numShown >= projects.length} on:click={() => (numShown += 6)}>
				Show more
			</button>
		</div>
	</div>
</section>

<style lang="postcss">
	#projects {
		margin-top: 1rem;
		padding-bottom: 2rem;
	}

	.grid {
		display: grid;
		gap: 16px;

		.column {
			display: flex;
			flex-direction: column;
			gap: 16px;
		}
	}

	.grid-sm {
		grid-template-columns: repeat(1, minmax(0, 1fr));

		@media (--bp-md) {
			display: none;
		}
	}

	.grid-md {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		display: none;

		@media (--bp-md) {
			display: grid;
		}

		@media (--bp-lg) {
			display: none;
		}
	}

	.grid-lg {
		grid-template-columns: repeat(3, minmax(0, 1fr));
		display: none;

		@media (--bp-lg) {
			display: grid;
		}
	}

	.show-more {
		margin-top: 2rem;
		display: flex;
		justify-content: center;

		button {
			font-family: var(--ff-display);
			font-size: 1.5rem;
			font-weight: 600;
			opacity: 0.5;
			transition: 200ms ease;

			&:hover {
				cursor: pointer;
				opacity: 1;
			}
		}
	}
</style>
