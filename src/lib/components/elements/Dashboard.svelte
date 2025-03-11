<script lang="ts">
	import CustomChart from '$lib/components/elements/CustomChart.svelte';
    import type { TVisualizationDefinition } from "$lib/types/user/dashboard";
    export let chartDescriptions: TVisualizationDefinition
</script>

<div class='.dashboard'>
{#each chartDescriptions as chartDescription}
    <CustomChart chartConfig={chartDescription}></CustomChart>
{/each}
</div>
