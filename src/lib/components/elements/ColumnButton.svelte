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

<button class={
    ".columnSelectionButton " +
    (state ? " .selected" + (selectedFirst ? " .First" : "") : "")
} 
on:click={() => { handleCallback()}} 
    title="{columnName}"
    aria-label="variable button: {columnName}">
    {columnName}
</button>
