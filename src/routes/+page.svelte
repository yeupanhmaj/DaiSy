<script>
	import {
		Button,
		ThemeController,
		ThemeProvider,
		Skeleton
	} from '$lib/components';

	import '../index.css';

	let theme = 'cupcake';
	let checked = false;

	$: theme = checked ? 'dark' : 'light';
</script>

<ThemeProvider
	{theme}
	classNames="flex justify-center items-center h-screen">
	<Button
		on:click={() => console.log('clicked')}
		size="sm">click me</Button>
	<ThemeController
		{checked}
		on:change={(e) => {
			checked = e.target.checked;
		}} />
</ThemeProvider>
