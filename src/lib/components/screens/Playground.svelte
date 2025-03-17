<script lang="ts">
    import { currentModelID } from "$lib/scripts/client/stores";
    import { requestModelDetails } from "$lib/scripts/services/request.analytics";
    import type { TDataArray } from "@learners-analytica/drashta-types-ts";
    let predictions:TDataArray[] = []
    $: predictions = []
</script>

{#await requestModelDetails($currentModelID)}
    <!-- promise is pending -->
{:then value}
    {value.columns[0]}
    {console.log(value.columns)}
{/await}