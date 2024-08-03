<script>
	import clsx from 'clsx';
	import { getGridClass } from './GridUtils.js';

	/**
	 * The grid custom classes.
	 * @type {string}
	 * @default ''
	 * */
	export let classes = '';

	/**
	 * The columns of the grid.
	 *
	 * @type {2 | 4 | 8 | 12 | 16}
	 * @default 8
	 */
	export let columns = 8;

	/**
	 * The gap of the grid.
	 *
	 * @type {0 | 1 | 2 | 3 | 4}
	 * @default 1
	 */
	export let gap = 1;

	$: gridProps = {
		class: clsx(
			'grid w-full',
			getGridClass(columns, gap),
			classes
		)
	};
</script>

<div {...gridProps}><slot /></div>
