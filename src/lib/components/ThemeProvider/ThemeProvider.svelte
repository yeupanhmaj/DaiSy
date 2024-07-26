<script>
	export let theme = 'cupcake';
	export let classNames = '';
</script>

<div data-theme={theme} class={classNames}>
	<slot />
</div>
