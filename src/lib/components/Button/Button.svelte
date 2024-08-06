<script>
	import clsx from 'clsx';
	import {
		getSizeClass,
		getVariantClass
	} from './ButtonUtils.js';

	/**
	 * The button custom classes.
	 * @type {string}
	 * @default ''
	 * */
	export let classes = '';

	/**
	 * The color variant of the button.
	 *
	 * @type {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'link'}
	 * @default 'primary'
	 */
	export let variant = 'primary';

	/**
	 * The size of the button.
	 *
	 * @type {'xs' | 'sm' | 'lg'}
	 * @default 'sm'
	 */
	export let size = 'sm';

	/**
	 * If `true`, the button will be disabled.
	 *
	 * @type {boolean}
	 * @default false
	 * */
	export let disabled = false;

	/**
	 * If `true`, the button will have a glass effect.
	 *
	 * @type {boolean}
	 * @default false
	 * */
	export let glassEffect = false;

	/**
	 * If `true`, the button will be loading. Loading spinner will be displayed before the button content.
	 *
	 * @type {boolean}
	 * @default false
	 * */
	export let loading = false;

	$: buttonProps = {
		class: clsx(
			'btn',
			getSizeClass(size),
			getVariantClass(variant),
			glassEffect ? 'glass' : '',
			classes
		),

		disabled: disabled
	};
</script>

<button {...buttonProps} on:click>
	{#if loading}
		<span class="loading loading-spinner" />
	{/if}
	<slot />
</button>
