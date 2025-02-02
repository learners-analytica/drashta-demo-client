<script lang="ts">
	import type { TableStructData } from "$lib/types/utils/data";

    export let tableNames: TableStructData[];
    export let callbackTableNames: (arg: string) => void;
</script>

<div class="flex flex-col space-y-2">
    {#if tableNames.length > 0}
        {#each tableNames as tableName}
            <button class="py-2 px-4 bg-blue-500 text-white rounded" on:click={() => callbackTableNames(tableName.tableName)}>
                {tableName.tableDisplayName ?? tableName.tableName}
            </button>
        {/each}
    {/if}
</div>

