<script lang="ts">
    import type { TModelQueryAddVariableResponse } from "$lib/types/utils/misc";
    export var columnName:string
    var state:boolean;
    var selectedFirst:boolean;

    $: state = true
    $: selectedFirst = false

    export let callbackModelQueryAddVariable: (variable: string) => TModelQueryAddVariableResponse
    function handleCallback(){
        const callbackState:TModelQueryAddVariableResponse = callbackModelQueryAddVariable(columnName)
        state = callbackState.variableAdded
        selectedFirst = callbackState.targetVariable
    }
</script>

<button class={"p-2 rounded-sm shadow-md m-2 w-30 " +
    (state ? "bg" + (selectedFirst ? "-orange-100" : "-blue-100") : "")
} 
on:click={() => { handleCallback()}} 
    title="{columnName}"
    aria-label="variable button: {columnName}">
    {columnName}
</button>
