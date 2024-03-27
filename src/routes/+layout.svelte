<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import '$styles/index.css';

	import '@fontsource/caveat/700.css';
	import '@fontsource-variable/urbanist';
	import '@fontsource-variable/inter';
</script>

<main>
	<slot />
	<Footer />
</main>

<style>
</style>
