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

<ThemeProvider {theme}>
	<Grid>
		<GridCol>
			Button: <Button
				on:click={() => (checked = !checked)}
				>Button</Button
			></GridCol>
		<GridCol
			>Toggle: <Toggle bind:checked /></GridCol>
		<GridCol
			>Checkbox: <Checkbox
				bind:checked /></GridCol>
		<GridCol
			>Textbox: {value}
			<TextBox bind:value /></GridCol>
	</Grid>
</ThemeProvider>
