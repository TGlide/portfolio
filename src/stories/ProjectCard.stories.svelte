<!-- Button.stories.svelte -->
<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import ProjectCard from '../components/ProjectCard.svelte';
	import image from './assets/project-img.png';
	import logo from './assets/project-logo.png';

	const imageProp = {
		src: image,
		alt: 'Project image'
	};
</script>

<Meta
	title="Project Card"
	component={ProjectCard}
	argTypes={{
		showImage: {
			type: 'boolean',
			defaultValue: true
		},
		imagePosition: {
			type: {
				name: 'enum',
				value: ['top', 'bottom']
			}
		},
		title: {
			type: 'string',
			defaultValue: 'Project'
		},
		description: {
			type: 'string',
			defaultValue: `This project is awesome. Like, seriously, it is jaw-dropping. You should be envious that I've managed to do this.`
		},
		links: {
			type: {
				name: 'array',
				value: {
					name: 'object',
					value: {
						href: {
							name: 'string'
						},
						text: {
							name: 'string'
						}
					}
				}
			},
			defaultValue: [
				{
					href: 'https://github.com/tglide',
					text: 'source code'
				},
				{
					href: 'https://github.com/tglide',
					text: 'check it out'
				}
			]
		}
	}}
/>

<Template let:args>
	<!-- svelte-ignore missing-declaration -- Require does not need to be defined -->
	<ProjectCard
		{...args}
		image={args.showImage ? { ...imageProp, position: args.imagePosition } : undefined}
		logo={{
			src: logo,
			alt: 'Project logo'
		}}
	>
		{args.label}
	</ProjectCard>
</Template>

<Story name="Default" />
