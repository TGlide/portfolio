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

<style lang="scss">
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

	.decorative-text {
		position: relative;

		span:not(.name) {
			font-family: var(--ff-decorative);
			font-size: 1.5rem;
			color: var(--fiery-rose);
		}

		.line-left {
			position: absolute;
			top: -2.5rem;
			left: 2.5rem;
			transform: rotate(-10deg);
		}

		.text-left {
			position: absolute;
			top: -0.5rem;
			left: -0.5rem;
			--base-transform: translateY(-100%) rotate(-15deg);
			animation: pop-in 500ms 3750ms ease-in-out both;
		}

		.line-right {
			position: absolute;
			top: -2.5rem;
			right: 2rem;
		}

		.text-right {
			position: absolute;
			top: -0.6rem;
			right: -1rem;
			--base-transform: translateY(-100%) rotate(15deg);
			animation: pop-in 500ms 3750ms ease-in-out both;
		}

		.name {
			border-bottom: 3px var(--megaman-blue) solid;
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
		animation: dash 500ms 3250ms ease-out forwards;
	}
</style>
