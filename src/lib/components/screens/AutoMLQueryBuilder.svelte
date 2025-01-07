<script lang="ts">
    import { executeQueryTrainAutoML, testExecuteQueryTrainAutoML } from "$lib/scripts/fastAPI/fastapi-ml-requests";

    let responseText: string = '';

    async function handleTestCallback() {
        responseText = await testExecuteQueryTrainAutoML();
    }
</script>

<button on:click={handleTestCallback}>Test AutoML</button>
<p>{responseText}</p>

