<script lang="ts">
	import { EMenu, MENUS } from "$lib/scripts/client/consts";
	import { setMenu } from "$lib/scripts/client/stores";
</script>
<div>
	{#each MENUS as menu}
		<button on:click={() => setMenu(menu)}>{menu}</button>
	{/each}
</div>
