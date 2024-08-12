<script>
	import clsx from 'clsx';
	import { getCheckboxClass } from './CheckboxUtils.js';

	export let checked;

	export let size = 'sm';

	export let classes = '';

	$: checkboxProps = {
		class: clsx(
			'checkbox',
			getCheckboxClass('primary', size),
			classes
		)
	};
</script>

<input
	type="checkbox"
	bind:checked
	{...checkboxProps} />
