<script>
	import clsx from 'clsx';

	/**
	 * The placeholder of the textbox.
	 *
	 * @type {string}
	 * @default 'Search...'
	 */
	export let placeholder = 'Search...';

	/**
	 * The value of the textbox.
	 *
	 * @type {string}
	 * @default ''
	 */
	export let value = '';

	$: textBoxProps = {
		class: clsx(
			'input input-bordered w-full max-w-xs'
		),
		placeholder
	};
</script>

<input
	type="text"
	bind:value
	on:change
	on:blur
	on:focus
	on:keydown
	on:keyup
	on:keypress
	{...textBoxProps} />
