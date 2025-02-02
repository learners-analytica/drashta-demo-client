
<script lang="ts">
    import type {DataSeries} from "@learners-analytica/drashta-types-ts";
    import { iconMapDataTypes } from "$lib/scripts/utils/consts/iconMaps";
    export let callback:(arg:string,argSelection:Boolean) => void;
    export let dataSeries:DataSeries
    let isSelected = false;

    function handleSeriesSelectionCallback(){
        if (isSelected === false){
            callback(dataSeries.seriesName,true)
            isSelected = true;
        }
        if (isSelected === true){
            callback(dataSeries.seriesName,false)
            isSelected = false;
        }
    }
</script>

<button on:click={() => handleSeriesSelectionCallback()}>
    {dataSeries.seriesName}
    <img class="{iconMapDataTypes[dataSeries.seriesType]}" alt={dataSeries.seriesType}/>
</button>

<div class='data-series-column'>
    {#each dataSeries.seriesData as datapoint}
        <p>{datapoint}</p>
    {/each}
</div>

