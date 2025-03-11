<script lang="ts">
	import CustomChart from '$lib/components/elements/custom-chart.svelte';
    import type { TVisualizationDefinition } from "$lib/types/user/dashboard";
    export let chartDescriptions: TVisualizationDefinition
</script>

{#each chartDescriptions as chartDescription}
    <CustomChart chartConfig={chartDescription}></CustomChart>
{/each}
