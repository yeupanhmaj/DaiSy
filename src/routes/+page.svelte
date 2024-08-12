<script>
	import {
		Toggle,
		ThemeProvider,
		GridCol,
		Grid,
		Button,
		Checkbox,
		TextBox
	} from '$lib/index.js';

	import '../index.css';

	let theme = 'cupcake';
	let checked = false;

	let value = 'Hello';

	$: theme = checked ? 'dark' : 'light';
</script>

<ThemeProvider
	{theme}
	classes="flex justify-center items-center h-screen">
	<Grid classes="p-1">
		<GridCol classes="flex flex-col gap-1">
			Button: <Button
				on:click={() => (checked = !checked)}
				>Button</Button
			></GridCol>
		<GridCol classes="flex flex-col gap-1"
			>Toggle: <Toggle bind:checked /></GridCol>
		<GridCol classes="flex flex-col gap-1"
			>Checkbox: <Checkbox
				bind:checked /></GridCol>
		<GridCol classes="flex flex-col gap-1"
			>Textbox: {value}
			<TextBox bind:value /></GridCol>
	</Grid>
</ThemeProvider>
