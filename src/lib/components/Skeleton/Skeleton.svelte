<script>
	import clsx from 'clsx';

	export let widthClass = 'w-full';

	export let heightClass = 'h-4';

	$: classNames = clsx(
		'skeleton',
		widthClass,
		heightClass
	);
</script>

<div class={classNames} />
