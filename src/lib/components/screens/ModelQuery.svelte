<script lang="ts">
	import ColumnButton from './../elements/column-button.svelte';

    import type { TModelQueryAddVariableResponse } from "$lib/types/utils/misc";
    import { getTableStructure } from "$lib/scripts/services/request.bridge";

    export let table:string;
    
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

</script>

{#await getTableStructure(table)}
    ...Loading Column Buttons
{:then data} 
    {#each data.table_column_head_data as data_series}
        <ColumnButton columnName={data_series.column_name} callbackModelQueryAddVariable={addVariableToSelectedColumns}></ColumnButton>
    {/each}
{/await}
