<script lang='ts'>
	import CustomChart from './../lib/components/charts/custom-chart.svelte';
	import { onMount } from 'svelte';
	import type { ChartDataset } from 'chart.js/auto';
</script>

<style>
	.custom-chart {
		display: inline-block;
		width: calc(33.33% - 1em);
		margin: 0.5em;
	}
</style>

