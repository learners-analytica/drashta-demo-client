<script lang="ts">
	import { loadDashboard } from '$lib/scripts/client/dashboard';
	import DashboardMenu from '../menus/DashboardMenu.svelte';
	import Dashboard from '../elements/Dashboard.svelte';
</script>

{#await loadDashboard()}
	...Loading Dashboard Menus
{:then init}
	<DashboardMenu></DashboardMenu>
	<Dashboard></Dashboard>
{/await}
