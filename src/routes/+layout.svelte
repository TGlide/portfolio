<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import '$styles';

	import { dev } from '$app/environment';
</script>

<main>
	<slot />
	<Footer />
</main>

<style>
</style>
