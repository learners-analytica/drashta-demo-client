<script lang="ts">
	import CustomChart from '$lib/components/elements/CustomChart.svelte';
    import type { TDashboardDefinition } from "$lib/types/user/dashboard";
    import { dashboard, currentDashboardIndex } from '$lib/scripts/client/stores';

    function getDashboard():TDashboardDefinition{
        if ($dashboard && $currentDashboardIndex >= 0 && $currentDashboardIndex < $dashboard.length) {
            return $dashboard[$currentDashboardIndex];
        }
        return {name: '', description: '', visualization: []};
    }
</script>

<div class='.dashboard'>
    {#if $dashboard}
    {#each getDashboard().visualization as chartDescription}
    <CustomChart chartConfig={chartDescription}></CustomChart>
{/each}
    {:else}
         <!-- else content here -->
    {/if}
</div>
