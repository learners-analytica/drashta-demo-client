<script lang="ts">
	import { onMount } from "svelte";
	import { menu } from "$lib/scripts/client/stores";
	import { EMenu } from "$lib/scripts/client/consts";
    import { loadDashboard } from "$lib/scripts/client/dashboard";
	import DashboardScreen from "$lib/components/screens/DashboardScreen.svelte";
	import TableBrowser from "$lib/components/screens/TableBrowser.svelte";
	import ModelBrowser from "$lib/components/screens/ModelBrowser.svelte";
</script>

{#if $menu}
	{#if $menu === EMenu.Home}
	{#await loadDashboard}
		...Loading Viz
	{:then dashboard}
		<DashboardScreen></DashboardScreen>
	{/await}
	{:else if  $menu === EMenu.Database}
	<TableBrowser></TableBrowser>
	{:else if  $menu === EMenu.ModelQuery}
		 <!-- else if content here -->
	{:else if  $menu === EMenu.Models}
		 <ModelBrowser></ModelBrowser>
	{:else if  $menu === EMenu.Playground}
		 <!-- else if content here -->
	{:else}
		 <!-- else content here -->
	{/if}
{/if}
