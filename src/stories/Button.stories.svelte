<!-- Button.stories.svelte -->
<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Button from '../UI/Button.svelte';

	let count = 0;
	function handleClick() {
		count += 1;
	}
</script>

<Meta
	title="Button"
	component={Button}
	argTypes={{
		label: {
			type: 'string',
			defaultValue: 'Button'
		}
	}}
/>

<Template let:args>
	<Button {...args} on:click={handleClick}>
		{args.label}
	</Button>
</Template>

<Story name="Default" />
