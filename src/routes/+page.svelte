<script>
	import {
		ThemeController,
		ThemeProvider,
		Skeleton
	} from '$lib/components';

	import Button from '$lib/components/Button/Button.svelte';
	import Grid from '$lib/components/Grid/Grid.svelte';
	import GridCol from '$lib/components/GridCol/GridCol.svelte';
	import clsx from 'clsx';

	import '../index.css';

	let theme = 'cupcake';
	let checked = false;

	$: theme = checked ? 'dark' : 'light';
</script>

<ThemeProvider
	{theme}
	classNames="flex justify-center items-center h-screen">
	<Grid classes="p-1">
		<GridCol classes="bg-primary"
			><Button>Button</Button></GridCol>
		<GridCol classes="bg-secondary"></GridCol>
		<GridCol classes="bg-accent"></GridCol>
		<GridCol classes="bg-info"></GridCol>
	</Grid>
</ThemeProvider>
