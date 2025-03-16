<script lang="ts">
	import { onMount } from "svelte";
    import { loadDashboard } from "$lib/scripts/client/dashboard";
	import DashboardScreen from "$lib/components/screens/DashboardScreen.svelte";
	import TableBrowser from "$lib/components/screens/TableBrowser.svelte";
</script>

{#await loadDashboard() then value}
    <DashboardScreen></DashboardScreen>
{/await}

<TableBrowser></TableBrowser>
