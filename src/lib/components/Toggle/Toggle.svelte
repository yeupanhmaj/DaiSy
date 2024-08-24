<script>
	import clsx from 'clsx';

	/**
	 * The checked state of the toggle.
	 *
	 * @type {boolean}
	 * @default false
	 */
	export let checked = false;

	$: toggleProps = {
		class: clsx('toggle')
	};
</script>

<input
	type="checkbox"
	{...toggleProps}
	bind:checked />
