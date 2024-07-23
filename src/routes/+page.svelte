<script>
	import {
		Button,
		ThemeController
	} from '$lib/components';

	import '../index.css';

	let theme = 'cupcake';
</script>

<div
	data-theme={theme}
	class="w-full h-screen flex items-center justify-center">
	<Button on:click={() => console.log('clicked')}>
		click me</Button>

	<ThemeController
		on:change={(value) =>
			(theme = value?.target?.value)} />
</div>
