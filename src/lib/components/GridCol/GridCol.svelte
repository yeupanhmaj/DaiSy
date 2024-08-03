<script>
	import clsx from 'clsx';

	import { getGridColClass } from './GridColUtils.js';

	/**
	 * The grid custom classes.
	 * @type {string}
	 * @default ''
	 * */
	export let classes = '';

	/**
	 * The span of the grid.
	 *
	 * @type {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16}
	 * @default 1
	 */
	export let span = 1;

	$: gridColProps = {
		class: clsx(
			'grid-col bg-',
			getGridColClass(span),
			classes
		)
	};
</script>

<div {...gridColProps}><slot /></div>
