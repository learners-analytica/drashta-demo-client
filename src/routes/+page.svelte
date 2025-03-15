<script lang="ts">
	import { menu } from "$lib/scripts/client/stores";
	import { EMenu } from "$lib/scripts/client/consts";
</script>

{#if $menu === EMenu.Home}
	<div></div>
{:else if  $menu === EMenu.Database}
	<div></div>	
{:else if  $menu === EMenu.Playground}
	<div></div>	
{:else if  $menu === EMenu.Models}
	<div></div>	
{:else if  $menu === EMenu.ModelQuery}
	<div></div>	
{/if}
