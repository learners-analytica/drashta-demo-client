<script lang="ts">
    export let tableNames:string[]
    export let callbackTableNames: (arg: string) => void;
</script>

{#if tableNames.length > 0}
    {#each tableNames as tableName}
        <button on:click={() => callbackTableNames(tableName)}>{tableName}</button>
    {/each}
{/if}
