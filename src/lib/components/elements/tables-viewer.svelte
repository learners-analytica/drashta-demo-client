<script lang="ts">
    import { BRIDGE_POST } from "$lib/scripts/services/requests-bridge";
	import DataColumn from "./data-column.svelte";

    export let table:string
    export let callbackTableNames: (arg: string) => void;
</script>

{#await BRIDGE_POST.getTableData(table)}
    loading data..
{:then DataSeriesColumn} 
    {#each DataSeriesColumn as column}
        <DataColumn dataSeries={column} callback={callbackTableNames}></DataColumn> 
    {/each}
{/await}
