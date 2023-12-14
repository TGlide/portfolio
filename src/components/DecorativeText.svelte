<span class="decorative-text">
	<span class="text-left">Developer</span>
	<span class="line-left">
		<svg width="25" height="32" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				opacity="0.25"
				d="M1.41031 1.17982C13.2695 6.57078 2.16984 14.1971 10.601 20.0423C14.3219 22.622 26.6068 16.9268 23.3905 31.2778"
				stroke="#F7FAFF"
				stroke-width="2"
			/>
		</svg>
	</span>
	<span class="text-right">Designer</span>
	<span class="line-right">
		<svg width="21" height="35" viewBox="0 0 21 35" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				opacity="0.25"
				d="M20.3883 1.15857C9.3883 8.15858 21.7006 14.3475 14.2006 21.3475C10.8906 24.4368 -2.29951 20.3475 3.2005 34.3476"
				stroke="#F7FAFF"
				stroke-width="2"
			/>
		</svg>
	</span>
	<span class="name"><slot /></span>
</span>

<style lang="postcss">
	@keyframes pop-in {
		0% {
			opacity: 0;
			transform: var(--base-transform) scale(0);
		}
		100% {
			opacity: 1;
			transform: var(--base-transform) scale(1);
		}
	}

	/* Animate a border from left to right using background linear-gradient  */
	@keyframes fill-border {
		0% {
			background-size: 0% 3px;
		}
		100% {
			background-size: 100% 3px;
		}
	}

	.decorative-text {
		position: relative;

		span:not(.name) {
			display: none;

			font-family: var(--ff-decorative);
			font-size: 1.25rem;
			color: var(--fiery-rose);

			@media (--bp-md) {
				display: inline-block;
			}

			@media (--bp-lg) {
				font-size: 1.75rem;
			}
		}

		.line-left {
			position: absolute;
			top: -2.25rem;
			left: 0.5rem;
			transform: rotate(-10deg);

			@media (--bp-lg) {
				top: -2.5rem;
				left: 2.5rem;
			}
		}

		.text-left,
		.text-right {
			animation: pop-in 500ms 1500ms ease-in-out both;

			@media (--bp-lg) {
				animation-delay: 1000ms;
			}
		}

		.text-left {
			position: absolute;
			top: -1rem;
			left: -2rem;

			--base-transform: translateY(-100%) rotate(-15deg);

			@media (--bp-lg) {
				top: -0.5rem;
				left: -0.75rem;
			}
		}

		.line-right {
			position: absolute;
			top: -2rem;
			right: 0.5rem;

			@media (--bp-lg) {
				top: -2.5rem;
				right: 2rem;
			}
		}

		.text-right {
			position: absolute;
			top: -1.1rem;
			right: -1.5rem;

			--base-transform: translateY(-100%) rotate(15deg);

			@media (--bp-lg) {
				top: -0.6rem;
				right: -1.25rem;
			}
		}

		.name {
			background: linear-gradient(
				to right,
				hsla(var(--megaman-blue-hsl), 1) 0%,
				hsla(var(--megaman-blue-hsl), 1) 0%
			);
			background-size: 0% 3px;
			background-repeat: no-repeat;
			background-position: bottom left;
			animation: fill-border 500ms 500ms ease forwards;

			user-select: none;
		}
	}

	@keyframes dash {
		to {
			stroke-dashoffset: 100;
		}
	}

	path {
		stroke-dasharray: 50;
		stroke-dashoffset: 50;
		animation: dash 500ms 1000ms ease-out forwards;

		@media (--bp-lg) {
			animation-delay: 750ms;
		}
	}
</style>
