<script lang="ts">
    import type { TModelQueryAddVariableResponse } from "$lib/types/utils/misc";
    export var columnName:string
    var state:boolean;
    var selectedFirst:boolean;

    $: state = false
    $: selectedFirst = false

    export let callbackModelQueryAddVariable: (variable: string) => TModelQueryAddVariableResponse
    function handleCallback(){
        const callbackState:TModelQueryAddVariableResponse = callbackModelQueryAddVariable(columnName)
        state = callbackState.variableAdded
        selectedFirst = callbackState.targetVariable
    }
</script>

<button class={"p-2 rounded-sm m-2 w-30 " +
    (state ? "inset-shadow-md " + (selectedFirst ? "bg-orange-100" : "bg-blue-100") : "shadow-md")
} 
on:click={() => { handleCallback()}} 
    title="{columnName}"
    aria-label="variable button: {columnName}">
    {columnName}
</button>
