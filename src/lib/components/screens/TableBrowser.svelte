<script lang="ts">
    import type { TTableMetaData } from "@learners-analytica/drashta-types-ts";
    import { getTableList, getTableMetaData } from "$lib/scripts/services/request.bridge";
	import TableDataSeriesViewer from "../elements/TableDataSeriesViewer.svelte";
</script>

{#await getTableList()}
    ... Loading
{:then tableList}
    {#each tableList as table}
        {#await getTableMetaData(table)}
            ... Loading
        {:then metaData}
            <TableDataSeriesViewer TableMetaData={metaData}></TableDataSeriesViewer>
        {/await}
    {/each}    
{/await}