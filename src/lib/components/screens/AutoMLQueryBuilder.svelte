<script lang="ts">
    import { executeQueryTrainAutoML } from "$lib/scripts/fastAPI/fastapi-requests";

    export let variableNames:string[]
    export let AutoMLTasks:string[]
    export let OptimizationMetrics:string[]

    let selectedTarget:string
    let selectedVariables:string[]
    let selectedTask:string
    let selectedOptmizationMeteric:string
    let selectedTimeBudget:Number

    function handleTrainCallback(){
        executeQueryTrainAutoML(selectedVariables,selectedTarget,selectedTask,selectedOptmizationMeteric,selectedTimeBudget)
    }
</script>

<select bind:value={selectedTask}>
    {#each AutoMLTasks as task}
        <option>{task}</option>
    {/each}
</select>

<select bind:value={selectedOptmizationMeteric}>
    {#each OptimizationMetrics as metric}
        <option>{metric}</option>
    {/each}
</select>


