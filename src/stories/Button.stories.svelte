<!-- Button.stories.svelte -->
<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import Button from '../UI/Button.svelte';
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
	<Button {...args}>
		{args.label}
	</Button>
</Template>

<Story name="Default" />
