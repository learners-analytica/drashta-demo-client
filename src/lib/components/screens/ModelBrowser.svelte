<script lang="ts">
    import { requestModelList } from "$lib/scripts/services/request.analytics";
	import ModelCard from "../elements/ModelCard.svelte";
</script>

{#await requestModelList()}
    ... Loading
{:then modelList}
    {#each modelList as model}
        <ModelCard modelMetadata={model}></ModelCard>
    {/each}
{/await}