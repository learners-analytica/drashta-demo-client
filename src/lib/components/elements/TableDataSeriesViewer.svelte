<script lang="ts">
	import DataSeriesCard from './DataSeriesCard.svelte';
    import type { TTableMetaData } from "@learners-analytica/drashta-types-ts";
    export let TableMetaData:TTableMetaData
</script>

<button><h1>{TableMetaData.table_name}</h1></button>

<div>
{#each TableMetaData.table_data_series as data_series}
    <DataSeriesCard columnMetaData={data_series}></DataSeriesCard>
{/each}
</div>
