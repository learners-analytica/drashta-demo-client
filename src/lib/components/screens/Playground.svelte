<script lang="ts">
    import { currentModelID } from "$lib/scripts/client/stores";
    import { requestModelDetails } from "$lib/scripts/services/request.analytics";
    import type { TDataArray } from "@learners-analytica/drashta-types-ts";
	import { onMount } from "svelte";
    import { TabulatorFull as Tabulator } from "tabulator-tables";


    let predictions:TDataArray[] = []
    $: predictions = []

    onMount(async()=>{
        
    })
</script>

{#await requestModelDetails($currentModelID)}
    <!-- promise is pending -->
{:then value}
    {#each value.columns as column}
        <p>{column.column_name}</p>
    {/each}
    {console.log(value.columns)}
{/await}