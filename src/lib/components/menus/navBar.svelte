<script lang="ts">
	import { EMenu, MENUS } from "$lib/scripts/client/consts";
</script>
<div>
	{#each MENUS as menu}
		<button>{menu}</button>
	{/each}
</div>
