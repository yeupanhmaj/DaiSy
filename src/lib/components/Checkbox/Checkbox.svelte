<script>
	import clsx from 'clsx';
	import { getCheckboxClass } from './CheckboxUtils.js';

	export let checked;

	export let size = 'sm';

	$: checkboxProps = {
		class: clsx(
			'checkbox',
			getCheckboxClass('primary', size)
		)
	};
</script>

<input
	type="checkbox"
	bind:checked
	{...checkboxProps} />
