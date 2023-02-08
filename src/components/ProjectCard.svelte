<script lang="ts" context="module">
	type Link = {
		href: string;
		text: string;
	};

	type Image = {
		src: string;
		alt: string;
	};

	function isImage(image: any): image is Image {
		return typeof image === 'object' && 'src' in image && 'alt' in image;
	}

	type PositionedImage = Image & {
		position?: 'top' | 'bottom';
	};

	type TypedLogo = {
		text: string;
		color: string;
		bgColor: string;
	};

	export type ProjectCardProps = {
		image?: PositionedImage;
		logo?: Image | TypedLogo;
		title: string;
		description: string;
		links?: Link[];
		animationDelay?: string;
	};
</script>

<script lang="ts">
	import { getWindowHeight, onBrowserMount } from '$utils/svelte';

	type $$Props = ProjectCardProps;

	export let image: $$Props['image'] = undefined;
	export let logo: $$Props['logo'] = undefined;
	export let title: $$Props['title'];
	export let description: $$Props['description'];
	export let links: $$Props['links'] = undefined;
	export let animationDelay: $$Props['animationDelay'] = undefined;

	$: imagePosition = image?.position ?? 'top';

	let hasJs = false;
	onBrowserMount(() => {
		hasJs = true;
	});

	let scrollY = 0;
	$: scrollBottom = scrollY + getWindowHeight();

	let el: HTMLDivElement | null = null;
	$: elY = (el?.getBoundingClientRect()?.top ?? 0) + scrollY;

	const triggerOffset = 250;

	let animationTriggered = false;
	$: {
		if (elY < scrollBottom - triggerOffset && hasJs) {
			animationTriggered = true;
		}
	}
</script>

<svelte:window bind:scrollY />

<div
	class="project-card"
	class:reverse={imagePosition === 'bottom'}
	class:animate={animationTriggered || !hasJs}
	style:--animation-delay={animationDelay ?? '0ms'}
	bind:this={el}
>
	{#if image}
		<img class="thumbnail" src={image.src} alt={image.alt} />
	{/if}
	<div class="content">
		<div class="header">
			{#if isImage(logo)}
				<img src={logo.src} alt={logo.alt} class="logo" />
			{:else if logo}
				<div class="logo" style:color={logo.color} style:background-color={logo.bgColor}>
					<span>
						{logo.text}
					</span>
				</div>
			{/if}
			<p>{title}</p>
		</div>
		<p class="description">
			{description}
		</p>
		{#if links}
			<div class="links">
				{#each links as link, idx}
					{@const isLast = idx + 1 === (links || []).length}
					<a href={link.href} target="_blank" rel="noreferrer">{link.text}</a>
					{#if !isLast}
						<span class="separator">·</span>
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	@keyframes fade-bottom-to-top {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.project-card {
		display: flex;
		flex-direction: column;
		background-color: var(--eerie-gray);
		border-radius: var(--radii-12);

		padding: 1rem;

		opacity: 0;
		transform: translateY(16px);

		&.animate {
			animation: fade-bottom-to-top 0.5s ease var(--animation-delay, 0ms) both;
		}

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
		max-height: 450px;
		object-fit: cover;
		border-radius: var(--radii-8);
	}

	.content > * + * {
		margin-top: 0.75rem;
	}

	.header {
		display: flex;
		flex-direction: row;
		align-items: center;

		> * + * {
			margin-left: 0.75rem;
		}

		> .logo {
			border-radius: var(--radii-8);
			width: 3rem; /* 48px */
			height: 3rem;

			&:is(div) {
				display: grid;
				place-items: center;
				font-size: 1.5rem;
				font-weight: 600;
			}
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
		line-height: 1.45rem;
		opacity: 0.9;
	}

	.links {
		display: flex;
		flex-direction: row;
		align-items: center;

		> * + * {
			margin-left: 0.5rem;
		}

		> * {
			opacity: 0.5;
		}

		> a {
			font-family: var(--ff-display);
			font-size: 0.875rem;
			font-weight: 500;
			transition: opacity 200ms ease;

			border-bottom: 1px solid var(--ghost-white);

			&:hover {
				opacity: 1;
			}
		}
	}
</style>
