<script>
	import clsx from 'clsx';

	/**
	 * The toggle custom classes.
	 * @type {string}
	 * @default ''
	 * */
	export let classes = '';

	/**
	 * The checked state of the toggle.
	 *
	 * @type {boolean}
	 * @default false
	 */
	export let checked = false;

	$: toggleProps = {
		class: clsx('toggle', classes)
	};
</script>

<input
	type="checkbox"
	{...toggleProps}
	bind:checked />
