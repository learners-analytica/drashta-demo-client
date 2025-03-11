<script lang="ts">
    export var columnName:string
    var state:boolean = true;
    export let callback: (variable: string, state:boolean) => void
</script>

<button class="columnSelectionButton 
{state ? 'selected' : ''}" 
on:click={() => {state = !state; 
    callback(columnName,state)}} 
    title="{columnName}"
    aria-label="variable button: {columnName}">
</button>
