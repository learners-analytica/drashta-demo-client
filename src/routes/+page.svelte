<script lang="ts">
	import { onMount } from 'svelte';
	import { menu } from '$lib/scripts/client/stores';
	import { EMenu } from '$lib/scripts/client/consts';
	import { loadDashboard } from '$lib/scripts/client/dashboard';
	import DashboardScreen from '$lib/components/screens/DashboardScreen.svelte';
	import TableBrowser from '$lib/components/screens/TableBrowser.svelte';
	import ModelBrowser from '$lib/components/screens/ModelBrowser.svelte';
	import ModelQuery from '$lib/components/screens/ModelQuery.svelte';
	import Playground from '$lib/components/screens/Playground.svelte';
</script>

{#if $menu}
	{#if $menu === EMenu.Home}
		{#await loadDashboard}
			...Loading Viz
		{:then dashboard}
			<DashboardScreen></DashboardScreen>
		{/await}
	{:else if $menu === EMenu.Database}
		<TableBrowser></TableBrowser>
	{:else if $menu === EMenu.ModelQuery}
		<ModelQuery></ModelQuery>
	{:else if $menu === EMenu.Models}
		<ModelBrowser></ModelBrowser>
	{:else if $menu === EMenu.Playground}
	<Playground></Playground>
	{:else}
		<!-- else content here -->
	{/if}
{/if}
