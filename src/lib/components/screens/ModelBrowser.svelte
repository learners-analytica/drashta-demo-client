<script lang="ts">
    import { requestModelList } from "$lib/scripts/services/request.analytics";
	import ModelCard from "../elements/ModelCard.svelte";

    function handleModelClick(model_id:string){
        console.log(model_id)
    }
</script>

{#await requestModelList()}
    ... Loading
{:then modelList}
    {#each modelList as model}
        <ModelCard modelMetadata={model} callback={handleModelClick}></ModelCard>
    {/each}
{/await}