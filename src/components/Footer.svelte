<footer>
	<div class="flex flex-col items-center">
		<div class="icons">
			<a href="https://github.com/TGlide/" target="_blank">
				<img src="github.svg" alt="Github logo" />
			</a>
			<a href="mailto:thomasgl@pm.me" target="_blank">
				<img src="mail.svg" alt="Mail envelope" />
			</a>
			<a href="https://www.linkedin.com/in/thomas-gl/" target="_blank">
				<img src="linkedin.svg" alt="Linkedin logo" />
			</a>
		</div>
		<p>Made with <span>{'<3'}</span></p>
	</div>

	<img class="bg" src="footer_bg.svg" alt="Blue waves" />
</footer>

<style lang="postcss">
	footer {
		overflow: hidden;
		position: relative;
		padding-bottom: max(200px, 15vw);
		margin-top: 5rem;
	}

	.bg {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%) translateY(60%);
		width: 100%;
		min-width: 1024px;
		z-index: -1;
	}

	.icons {
		display: flex;
		justify-content: center;
		gap: 4rem;
		padding: 0 3rem 1rem;
		border-bottom: 1px solid hsla(var(--ghost-white-hsl), 0.25);

		& a {
			transition: ease 200ms;

			&:hover {
				opacity: 0.75;
			}
		}
	}

	p {
		font-weight: 300;
		font-size: 1.5rem;
		margin-top: 1.125rem;

		& span {
			color: var(--fiery-rose);
			font-family: var(--ff-decorative);
		}
	}
</style>
