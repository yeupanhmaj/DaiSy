<script>
	import clsx from 'clsx';

	/**
	 * The theme of the theme provider.
	 * @type {'light' | 'dark'}
	 * @default 'light'
	 * */
	export let theme = 'light';

	/**
	 * The theme provider custom classes.
	 * @type {string}
	 * @default ''
	 * */
	export let classes = '';

	$: themProviderProps = {
		class: clsx('t', classes)
	};
</script>

<div data-theme={theme} {...themProviderProps}>
	<slot />
</div>
