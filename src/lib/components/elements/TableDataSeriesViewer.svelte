<script lang="ts">
	import DataSeriesCard from './DataSeriesCard.svelte';
    import type { TTableMetaData } from "@learners-analytica/drashta-types-ts";
    import { tableForModelQuery } from '$lib/scripts/client/tableViewer';
    export let TableMetaData:TTableMetaData

    function callbackSystem(){
        console.log(1)
    }
</script>

<button on:click={() => tableForModelQuery(TableMetaData.table_name)} class="w-full p-2 shadow-sm font-bold"><h1>{TableMetaData.table_name}</h1></button>
<div class="overflow-x-scroll w-200vh flex flex-row">
{#each TableMetaData.table_data_series as data_series,index}
    <DataSeriesCard columnMetaData={data_series} colorIndex={index}></DataSeriesCard>
{/each}
</div>
