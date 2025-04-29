<script lang="ts">
	import CustomChart from '$lib/components/elements/CustomChart.svelte';
    import type { TDashboardDefinition } from "$lib/types/user/dashboard";
    import { dashboard, currentDashboardIndex } from '$lib/scripts/client/stores';
    import AddNewChartDialoge from '../dialogs/addNewChartDialoge.svelte';
    let addNewChartDialoge: AddNewChartDialoge;
    let isDialogOpen = false;
    $: isDialogOpen

    function getDashboard():TDashboardDefinition{
        if ($dashboard && $currentDashboardIndex >= 0 && $currentDashboardIndex < $dashboard.length) {
            return $dashboard[$currentDashboardIndex];
        }
        return {name: '', description: '', visualization: []};
    }
</script>

<div class='grid grid-cols-4 gap-4 w-screen grid-rows-4'>
    {#if $dashboard}
    {#each getDashboard().visualization as chartDescription}
    <CustomChart chartConfig={chartDescription}></CustomChart>
    {/each}
<!--  <button class="inset-shadow-black inset-shadow-sm hover:bg-sky-700" on:click={() => isDialogOpen = true}>+</button>---> 
    {:else}
         <!-- else content here -->
    {/if}
</div>

