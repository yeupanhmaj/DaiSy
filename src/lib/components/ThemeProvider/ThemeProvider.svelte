<script>
	import clsx from 'clsx';

	/**
	 * The theme of the theme provider.
	 * @type {'light' | 'dark'}
	 * @default 'light'
	 * */
	export let theme = 'light';

	$: themProviderProps = {
		class: clsx('t')
	};
</script>

<div data-theme={theme} {...themProviderProps}>
	<slot />
</div>
