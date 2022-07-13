<script>
	import ProjectCard from '$components/ProjectCard.svelte';
</script>

<section id="projects">
	<div class="container grid">
		<div class="column">
			<ProjectCard
				title="Wordex"
				description="Wordle clone with support for multiple languages"
				logo={{
					src: 'projects/wordex/logo.svg',
					alt: 'Wordex logo'
				}}
				image={{
					src: 'projects/wordex/image.png',
					alt: 'Wordex image'
				}}
				links={[
					{
						href: 'https://wordex.app/',
						text: 'check it out'
					},
					{
						href: 'https://github.com/tGlide/wordex',
						text: 'source code'
					}
				]}
			/>
			<ProjectCard
				title="Movie Search"
				description="A Next.js Web App to check if your letterboxd list movies are on netflix"
				logo={{
					text: 'M',
					color: 'var(--fiery-rose)',
					bgColor: 'var(--night-black)'
				}}
				image={{
					src: 'projects/movie-search/image.png',
					alt: `A table with 3 headers (Netflix, with a number alongside a green check indicating the movies on netflix, and a number alongside a red x indicating the movies that aren't), title, and rating (based on IMDB).`
				}}
				links={[
					{
						href: 'https://movie-search-iota.vercel.app/',
						text: 'check it out'
					},
					{
						href: 'https://github.com/TGlide/movie-search',
						text: 'source code'
					}
				]}
			/>
		</div>

		<div class="column">
			<ProjectCard
				title="Weather PWA"
				description="A weather PWA built with React, Typescript and SCSS"
				logo={{
					src: 'projects/weather/logo.svg',
					alt: 'Weather app logo'
				}}
				image={{
					src: 'projects/weather/image.png',
					alt: 'Weather app image',
					position: 'bottom'
				}}
				links={[
					{
						href: 'https://tgl-weather-app.vercel.app/',
						text: 'check it out'
					},
					{
						href: 'https://github.com/TGlide/weather-app',
						text: 'source code'
					}
				]}
			/>
			<ProjectCard
				title="Warrior's Tenacity"
				description="An arcade game where you defeat enemeis with the power of typing! Built for an old college assignment."
				links={[
					{
						href: 'https://github.com/TGlide/Warrior-s-Tenacity',
						text: 'source code'
					}
				]}
				logo={{
					text: 'W',
					color: '#E36018',
					bgColor: '#170005'
				}}
			/>
		</div>

		<div class="column">
			<ProjectCard
				title="Screen Recorder"
				description="Screen Recorder built with Vue and Electron"
				logo={{
					text: 'SR',
					color: '#42b883',
					bgColor: '#1A1A1A'
				}}
				links={[
					{
						href: 'https://github.com/TGlide/vue-electron-screen-recorder',
						text: 'source code'
					}
				]}
			/>
			<ProjectCard
				title="Chuck Norris Facts"
				description="A Next.js Web App to search for facts on the most badass man alive."
				logo={{
					src: 'projects/chuck/logo.svg',
					alt: 'Chuck Norris face'
				}}
				image={{
					src: 'projects/chuck/image.png',
					alt: 'A website containing a title written Chuck Norris Facts, a search bar, and a search button.',
					position: 'bottom'
				}}
				links={[
					{
						href: 'https://chuck-norris-facts-nextjs.vercel.app/',
						text: 'check it out'
					},
					{
						href: 'https://github.com/TGlide/chuck-norris-facts-nextjs',
						text: 'source code'
					}
				]}
			/>
		</div>
	</div>
</section>

<style lang="postcss">
	#projects {
		margin-top: 1rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 1rem;

		@media (--bp-sm) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (--bp-md) {
			grid-template-columns: repeat(3, 1fr);
		}

		.column {
			:global(> * + *) {
				margin-top: 1rem;
			}
		}
	}
</style>
