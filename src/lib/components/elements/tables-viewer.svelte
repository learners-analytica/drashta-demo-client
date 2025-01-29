<script lang="ts">
	import type { DataSeries } from "@learners-analytica/drashta-types-ts";
	import DataColumn from "./data-column.svelte";

    export let columnSelectionCallbackFunction:(args:string)=>void
    export let tableColumns:DataSeries[]
</script>

{#each tableColumns as column}
    <DataColumn callback={columnSelectionCallbackFunction} dataSeries={column} />
{/each}
