<script lang="ts">
	import '../src/styles';
</script>

<div>
	<slot />
</div>

<style>
	:global(html, body, #root) {
		height: 100%;
	}

	div {
		background-color: var(--night-black);
		margin: -16px;
		padding: 1rem;
		height: 100%;
	}
</style>
