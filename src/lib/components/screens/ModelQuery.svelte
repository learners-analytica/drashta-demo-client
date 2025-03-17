<script lang="ts">
	import ColumnButton from '../elements/ColumnButton.svelte';

    import type { TModelQueryAddVariableResponse } from "$lib/types/utils/misc";
    import { getTableStructure } from "$lib/scripts/services/request.bridge";
    import { currentTable } from '$lib/scripts/client/stores';
	import { onMount } from 'svelte';
    import { MLTaskTypes } from '@learners-analytica/drashta-types-ts';
    
    let selectedColumns:string[] = []

    $: selectedColumns = []

    function addVariableToSelectedColumns(variable:string):TModelQueryAddVariableResponse{
        if(selectedColumns.includes(variable)){
            selectedColumns.splice(selectedColumns.indexOf(variable),1)
            return {variableAdded:false,targetVariable:false}
        }
        else{
            selectedColumns.push(variable)
            let isTarget =( selectedColumns.indexOf(variable) == 0)
            return {variableAdded:true,targetVariable:isTarget}
        }
    }

    onMount(() => {
        console.log($currentTable)
        console.log("On Model Query")
    })

</script>

{#await getTableStructure($currentTable)}
    ...Loading Column Buttons
{:then data} 
    {#each data.table_column_head_data as data_series}
        <ColumnButton columnName={data_series.column_name} callbackModelQueryAddVariable={addVariableToSelectedColumns}></ColumnButton>
    {/each}
{/await}

<form>
    <input type="text" placeholder="Model Name">
    <select>
        {#each Object.values(MLTaskTypes) as taskType}
            <option>{taskType}</option>
        {/each}
    </select>
    <button type="submit">Generate Model</button>
</form>
