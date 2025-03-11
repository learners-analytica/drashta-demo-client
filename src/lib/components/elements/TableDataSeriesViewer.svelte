<script lang="ts">
	import DataSeriesCard from './DataSeriesCard.svelte';
    import type { TTableMetaData } from "@learners-analytica/drashta-types-ts";

    export let TableMetaData:TTableMetaData
</script>

{#each TableMetaData.table_data_series as data_series}
    <DataSeriesCard columnMetaData={data_series}></DataSeriesCard>
{/each}
