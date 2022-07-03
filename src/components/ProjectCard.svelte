<script lang="ts">
	type Link = {
		href: string;
		text: string;
	};

	type Image = {
		src: string;
		alt: string;
	};

	export let image: Image | undefined = undefined;
	export let logo: Image;
	export let title: string;
	export let description: string;
	export let links: Link[] | undefined = undefined;

	let imagePositionProp: 'top' | 'bottom' | undefined = undefined;
	export { imagePositionProp as imagePosition };
	$: imagePosition = imagePositionProp ? imagePositionProp : 'top';
</script>

<div class="project-card" class:reverse={imagePosition === 'bottom'}>
	{#if image}
		<img class="thumbnail" src={image.src} alt={image.alt} />
	{/if}
	<div class="content">
		<div class="header">
			<img src={logo.src} alt={logo.alt} class="logo" />
			<p>{title}</p>
		</div>
		<p class="description">
			{description}
		</p>
		{#if links}
			<div class="links">
				{#each links as link, idx}
					{@const isLast = idx + 1 === (links || []).length}
					<a href={link.href} target="_blank">{link.text}</a>
					{#if !isLast}
						<span class="separator">·</span>
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.project-card {
		display: flex;
		flex-direction: column;
		background-color: var(--eerie-gray);
		border-radius: var(--radii-12);

		padding: 1rem;
		width: 20rem; /* 320px */
	}

	.project-card.reverse {
		flex-direction: column-reverse;
	}

	.project-card > * + * {
		margin-top: 1rem;
	}

	.project-card.reverse > * + * {
		margin-top: 0;
		margin-bottom: 1rem;
	}

	.thumbnail {
		width: 100%;
		border-radius: var(--radii-8);
	}

	.content > * + * {
		margin-top: 0.5rem;
	}

	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.header > * + * {
		margin-left: 1rem;
	}

	.header > img {
		border-radius: var(--radii-8);
		width: 2.375rem; /* 48px */
		height: 2.375rem;
	}

	.header > p {
		font-family: var(--ff-display);
		font-size: 1.5rem;
		font-weight: 500;
	}

	.description {
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.2rem;
	}

	.links {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.links > * + * {
		margin-left: 0.5rem;
	}

	.links > * {
		opacity: 0.25;
	}

	.links > a {
		font-family: var(--ff-display);
		font-size: 0.75rem;
		font-weight: 500;
		transition: opacity 200ms ease;
	}

	.links > a:hover {
		opacity: 1;
	}
</style>
