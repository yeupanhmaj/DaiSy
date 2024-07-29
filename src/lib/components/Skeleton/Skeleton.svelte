<script>
	export let width = 32;
	export let height = 32;

	$: skeletonProps = {
		class: `skeleton h-[${height}px] w-[${width}px]`
	};
</script>

<div {...skeletonProps} />
