<script lang="ts">
	import ColumnButton from '../elements/ColumnButton.svelte';

    import type { TModelQueryAddVariableResponse } from "$lib/types/utils/misc";
    import { getTableStructure } from "$lib/scripts/services/request.bridge";
    import { currentTable } from '$lib/scripts/client/stores';
	import { onMount } from 'svelte';
    import { MLTaskTypes } from '@learners-analytica/drashta-types-ts';
    import { requestModelCreation } from '$lib/scripts/services/request.analytics';
    import { setMenu } from '$lib/scripts/client/stores';
    import { EMenu } from '$lib/scripts/client/consts';
    
    let selectedColumns:string[] = []
    let model_name:string = ""
    let model_task:MLTaskTypes = MLTaskTypes.REGRESSION

    $: selectedColumns = []
    $: model_name
    $: model_task

    function addVariableToSelectedColumns(variable:string):TModelQueryAddVariableResponse{
        if(selectedColumns.includes(variable)){
            selectedColumns.splice(selectedColumns.indexOf(variable),1)
            console.log(selectedColumns)
            return {variableAdded:false,targetVariable:false}
        }
        else{
            selectedColumns.push(variable)
            let isTarget =( selectedColumns.indexOf(variable) == 0)
            console.log(selectedColumns)
            return {variableAdded:true,targetVariable:isTarget}
        }
    }

    async function handleSubmitModelQuery(){
        const selectedColumnsInput = selectedColumns 
        const y_columns = selectedColumnsInput[0]
        selectedColumnsInput.shift()
        const response = await requestModelCreation(
            $currentTable,
            selectedColumns,
            y_columns,
            model_name,
            1000,
            model_task
        )
        setMenu(EMenu.Models)
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

<form on:submit={handleSubmitModelQuery}>
    <input type="text" placeholder="Model Name" bind:value={model_name}>
    <select bind:value={model_task}>
        {#each Object.values(MLTaskTypes) as taskType}
            <option>{taskType}</option>
        {/each}
    </select>
    <button type="submit">Generate Model</button>
</form>
