<script>
	import clsx from 'clsx';
	import { Skeleton } from '../Skeleton/index.js';

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
	 * If `true`, the button will be in a loading state.
	 *
	 * @type {boolean}
	 * @default false
	 * */
	export let skeleton = false;

	$: sizeString =
		size === 'xs'
			? 'btn-xs'
			: size === 'sm'
				? 'btn-sm'
				: 'btn-lg';

	$: buttonProps = {
		class: clsx('btn', sizeString),

		disabled: disabled
	};

	$: skeletonProps = {
		width: 77,
		height: 32
	};
</script>

{#if skeleton}
	<Skeleton
		width={77}
		height={32}
		{...skeletonProps} />
{/if}

{#if !skeleton}
	<button {...buttonProps} on:click>
		<slot></slot>
	</button>
{/if}
