<script lang="ts">
	import { browser } from '$app/env';
	import Eyes from '$components/Eyes';
	import DecorativeText from '$UI/DecorativeText.svelte';
	// @ts-ignore
	import CircleType from 'circletype';
	import { onMount } from 'svelte';

	let innerWidth = 1024;
	let circleType: any = null;

	const generateCircleType = (isLg: boolean) => {
		if (!browser) return;

		circleType?.destroy();

		const element = document.getElementById('circle-type');
		if (!element) return;

		circleType = new CircleType(element);
		circleType.radius(isLg ? 270 : 180);
	};

	$: isLg = innerWidth >= 1024;
	$: generateCircleType(isLg);

	onMount(() => {
		generateCircleType(isLg);
	});
</script>

<svelte:window bind:innerWidth />

<section id="hero">
	<div class="circle" />
	<div class="content">
		<img src="avatar.png" alt="Thomas Gouveia Lopes smiling" />
		<div class="text">
			<p>Hi!</p>
			<p>
				<span>My name is</span>
				<DecorativeText>Thomas</DecorativeText>
				<span class="dot">.</span>
			</p>
		</div>
	</div>
	<div class="bottom">
		<p id="circle-type">check out my work</p>
		<div class="eyes">
			<Eyes />
		</div>
	</div>
</section>

<style lang="postcss">
	@keyframes expand {
		0% {
			margin-left: 0rem;
			padding-right: 0rem;
			max-width: 0;
		}
		100% {
			margin-left: var(--expand-ml, 0);
			padding-right: 1rem;
			max-width: var(--expand-max-w, 0);
		}
	}

	@keyframes fade-top-to-bottom {
		0% {
			opacity: 0;
			transform: translateY(-1rem);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes scale {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}

	#hero {
		height: 100vh;
		min-height: 650px;
		max-height: 1440px;
		position: relative;
		overflow: hidden;

		@media (--bp-md) {
			display: grid;
			place-items: center;
			min-height: 800px;
		}

		> .circle {
			position: absolute;
			top: -350px;
			right: -400px;

			--size: 600px;
			width: var(--size);
			height: var(--size);

			background: var(--fiery-rose);
			opacity: 0.25;
			border-radius: 50%;
			animation: scale 1500ms 2000ms ease both;

			@media (--bp-md) {
				animation-duration: 1000ms;
				animation-delay: 3000ms;
			}

			@media (--bp-lg) {
				animation-delay: 3500ms;
				animation-duration: 1000ms;
				top: -320px;
				right: -250px;
			}
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		margin-top: 64px;

		@media (--bp-md) {
			margin-top: 0;
			flex-direction: row;
		}

		img {
			--size: 256px;
			width: var(--size);
			height: var(--size);

			animation: fade-top-to-bottom 500ms 500ms ease both;

			@media (--bp-lg) {
				--size: 320px;
			}
		}

		.text {
			font-family: var(--ff-display);
			overflow: hidden;
			white-space: nowrap;
			text-align: center;

			@media (--bp-md) {
				text-align: left;
				--expand-ml: 2rem;
				--expand-max-w: 25rem;
				animation: expand 1000ms 1500ms ease both;
			}

			@media (--bp-lg) {
				--expand-ml: 4rem;
				--expand-max-w: 35rem;
				animation: expand 1250ms 1500ms ease both;
			}

			p:nth-child(1) {
				font-size: 4.5rem;
				font-weight: 700;
				line-height: 6rem;

				animation: fade-top-to-bottom 1000ms 750ms ease both;

				@media (--bp-md) {
					animation: none;
				}

				@media (--bp-lg) {
					font-size: 6rem;
					line-height: 9rem;
				}
			}

			p:nth-child(2) {
				font-size: 2rem;
				line-height: 3.5rem;
				font-weight: 600;

				animation: fade-top-to-bottom 1000ms 1250ms ease both;

				@media (--bp-md) {
					animation: none;
				}

				@media (--bp-lg) {
					animation: none;
					font-size: 3rem;
					line-height: 4.5rem;
				}
			}
		}
	}

	.bottom {
		display: flex;
		flex-direction: column;
		align-items: center;

		position: absolute;
		left: 50%;
		bottom: 0rem;
		transform: translateX(-50%);

		padding-bottom: 1rem;

		animation: fade-in 1000ms ease 1750ms both;

		@media (--bp-md) {
			animation-delay: 2500ms;
		}

		@media (--bp-lg) {
			animation-delay: 3000ms;
		}

		#circle-type {
			font-family: var(--ff-display);
			font-size: 2rem;
			font-weight: 600;
			opacity: 0.25;

			@media (--bp-lg) {
				font-size: 3rem;
			}
		}

		.eyes {
			margin-top: -2.5rem;

			@media (--bp-lg) {
				margin-top: -3rem;
			}
		}
	}

	.dot {
		margin-left: -0.5rem;
	}
</style>
