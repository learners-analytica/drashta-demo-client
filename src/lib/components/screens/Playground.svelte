<script lang="ts">
	import { currentModelID } from '$lib/scripts/client/stores';
	import { requestModelDetails, requestModelPredict } from '$lib/scripts/services/request.analytics';
	import { generateObjectArrayFromTDataSeries, generateTabularColumnMetaData } from '$lib/scripts/utils/misc/conversion';
	import type { TDataArray, TDataSeriesMinimal } from '@learners-analytica/drashta-types-ts';
	import { onMount } from 'svelte';
	import { TabulatorFull as Tabulator } from 'tabulator-tables';
	import GenericTable from '../elements/GenericTable.svelte';
	import { Chart} from 'chart.js';

	let predictions: any = { predictions: [] };
	let data_columns: TDataSeriesMinimal[] = [];
	let converted_table_data: TDataArray = [];
	let columns_meta_data: unknown = [];
	let tableInstance: GenericTable;
	let chart: Chart;

	async function predict() {
		let x: TDataArray|undefined = await tableInstance.getData();
		predictions = await requestModelPredict(x, $currentModelID);
		console.log(predictions);
		updateChart();
	}

	async function loadModelData() {
		data_columns = (await requestModelDetails($currentModelID)).columns;
		converted_table_data = generateObjectArrayFromTDataSeries(data_columns, 5);
		columns_meta_data = generateTabularColumnMetaData(data_columns);
	}

	onMount(async () => {
		const canvas = document.getElementById("chart") as HTMLCanvasElement;
		chart = new Chart(canvas, {
			type: 'line',
			data: {
				labels: [],
				datasets: []
			},
			options: {
				responsive: true,
				maintainAspectRatio: false
			}
		});
		await loadModelData();
	});

	function updateChart() {
		if (!chart || !predictions || !predictions.predictions) return;
		
		chart.data.labels = Array.from({ length: predictions.predictions[0]?.predictions?.length || 0 }, (_, i) => i);
		chart.data.datasets = predictions.predictions.map((pred: any) => ({
			label: pred.column_name,
			data: pred.predictions,
			borderColor: pred.column_color || getRandomColor(),
			fill: false
		}));
		chart.update();
	}
	
	function getRandomColor() {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
</script>

{#await loadModelData() then value}
	<GenericTable data={converted_table_data} columns={columns_meta_data} bind:this={tableInstance}></GenericTable>
{/await}

<div class="chart-container" style="position: relative; height:400px; width:100%">
	<canvas id="chart"></canvas>
</div>

<button on:click={() => predict()}>Predict</button>

{#if predictions.predictions && predictions.predictions.length > 0}
	<div class="predictions-summary">
		<h3>Prediction Summary</h3>
		{#each predictions.predictions as prediction}
			<div class="prediction-item">
				<span style="color: {prediction.column_color || 'black'}">
					{prediction.column_name}: {prediction.predictions?.length || 0} predictions
				</span>
			</div>
		{/each}
	</div>
{/if}
