
<script lang="ts">
    import type {DataSeries} from "@learners-analytica/drashta-types-ts";
    import { iconMapDataTypes } from "$lib/scripts/utils/consts/iconMaps";
    export let callback:(arg:string) => void;
    export let dataSeries:DataSeries
</script>

<button on:click={() => callback(dataSeries.seriesName)}>
    {dataSeries.seriesName}
    <img class="{iconMapDataTypes[dataSeries.seriesType]}" alt={dataSeries.seriesType}/>
</button>

<div class='data-series-column'>
    {#each dataSeries.seriesData as datapoint}
        <p>{datapoint}</p>
    {/each}
</div>

