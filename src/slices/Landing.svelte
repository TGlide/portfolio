<script>
	import { browser } from '$app/env';
	import Eyes from '$components/Eyes';
	import DecorativeText from '$UI/DecorativeText.svelte';

	import { onBrowserMount } from '$utils/svelte';
	// @ts-ignore
	import CircleType from 'circletype';

	onBrowserMount(() => {
		if (!browser) return;
		const circleType = new CircleType(document.getElementById('circle-type'));
		circleType.radius(270);
	});
</script>

<section id="hero">
	<div class="circle" />
	<div class="content">
		<img src="avatar.png" alt="Thomas Gouveia Lopes smiling" />
		<div class="text">
			<p>Hi!</p>
			<p>My name is <DecorativeText>Thomas</DecorativeText>.</p>
		</div>
	</div>
	<div class="bottom">
		<p id="circle-type">check out my work</p>
		<div class="eyes">
			<Eyes />
		</div>
	</div>
</section>

<style lang="scss">
	@keyframes expand {
		0% {
			margin-left: 0rem;
			padding-right: 0rem;
			max-width: 0;
		}
		100% {
			margin-left: 4rem;
			padding-right: 1rem;
			max-width: 520px;
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
		display: grid;
		place-items: center;
		height: 100vh;
		min-height: 500px;
		position: relative;
		overflow: hidden;

		> .circle {
			position: absolute;
			top: -320px;
			right: -250px;
			width: 606px;
			height: 606px;
			background: var(--fiery-rose);
			opacity: 0.25;
			border-radius: 50%;
			animation: scale 750ms 4500ms ease both;
		}
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 320px;
			height: 320px;

			animation: fade-top-to-bottom 500ms 500ms ease both;
		}

		.text {
			font-family: var(--ff-display);
			overflow: hidden;
			white-space: nowrap;

			animation: expand 1750ms 1500ms ease both;

			p:nth-child(1) {
				font-size: 6rem;
				font-weight: 700;
				line-height: 9rem;
			}

			p:nth-child(2) {
				font-size: 3rem;
				font-weight: 600;
				line-height: 4.5rem;
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
		animation: fade-in 1000ms ease 4500ms both;

		#circle-type {
			font-family: var(--ff-display);
			font-size: 3rem;
			font-weight: 600;
			opacity: 0.25;
		}

		.eyes {
			margin-top: -3rem;
		}
	}
</style>
