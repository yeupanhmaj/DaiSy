<script>
	import {
		Toggle,
		ThemeController,
		ThemeProvider,
		Skeleton,
		GridCol,
		Grid,
		Button
	} from '$lib/index.js';

	import '../index.css';

	let theme = 'cupcake';
	let checked = false;

	$: theme = checked ? 'dark' : 'light';
</script>

<ThemeProvider
	{theme}
	classes="flex justify-center items-center h-screen">
	<Grid classes="p-1">
		<GridCol classes="bg-primary"
			><Button>Button</Button></GridCol>
		<GridCol classes="bg-secondary"
			><Toggle bind:checked /></GridCol>
		<GridCol classes="bg-accent"></GridCol>
		<GridCol classes="bg-info"></GridCol>
	</Grid>
</ThemeProvider>
