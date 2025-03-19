<script lang="ts">
	import { EMenu, MENUS } from "$lib/scripts/client/consts";
	import { setMenu } from "$lib/scripts/client/stores";
</script>
<div class="flex flex-row justify-center content-between flex-2 shadow-md">
	{#each MENUS as menu}
		<button on:click={() => setMenu(menu)} class="m-1 p-2 shadow-sm rounded-sm">{menu}</button>
	{/each}
</div>
