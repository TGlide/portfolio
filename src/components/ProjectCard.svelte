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

<style lang="scss">
	.project-card {
		display: flex;
		flex-direction: column;
		background-color: var(--eerie-gray);
		border-radius: var(--radii-12);

		padding: 1rem;
		width: 20rem; /* 320px */

		&.reverse {
			flex-direction: column-reverse;

			> * + * {
				margin-bottom: 1rem;
			}
		}

		&:not(.reverse) > * + * {
			margin-top: 1rem;
		}
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

		> * + * {
			margin-left: 1rem;
		}

		> img {
			border-radius: var(--radii-8);
			width: 2.375rem; /* 48px */
			height: 2.375rem;
		}

		> p {
			font-family: var(--ff-display);
			font-size: 1.5rem;
			font-weight: 500;
		}
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

		> * + * {
			margin-left: 0.5rem;
		}

		> * {
			opacity: 0.25;
		}

		> a {
			font-family: var(--ff-display);
			font-size: 0.75rem;
			font-weight: 500;
			transition: opacity 200ms ease;
		}

		> a:hover {
			opacity: 1;
		}
	}
</style>
