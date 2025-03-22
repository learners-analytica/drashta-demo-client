<script lang="ts">
	import { currentModelID } from '$lib/scripts/client/stores';
	import { requestModelDetails, requestModelPredict } from '$lib/scripts/services/request.analytics';
	import { generateObjectArrayFromTDataSeries, generateTabularColumnMetaData } from '$lib/scripts/utils/misc/conversion';
	import type { TDataArray, TDataSeriesMinimal } from '@learners-analytica/drashta-types-ts';
	import { onMount } from 'svelte';
	import { TabulatorFull as Tabulator } from 'tabulator-tables';
	import GenericTable from '../elements/GenericTable.svelte';
	import { Chart} from 'chart.js';
	import type { BubbleDataPoint,Point } from 'chart.js';

	let predictions: any = { predictions: [] };
	let data_columns: TDataSeriesMinimal[] = [];
	let converted_table_data: TDataArray = [];
	let columns_meta_data: unknown = [];
	let tableInstance: GenericTable;
	let chart: Chart;

	async function predict() {
		let x: TDataArray|undefined = await tableInstance.getData();
		predictions = await requestModelPredict(x, $currentModelID);
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
		updateChart()
	});

	function updateChart() {
	const columnKey = data_columns[0]?.column_name as string;
	console.log(data_columns)
	const valuesArray = columnKey ? tableInstance.getData()?.map(obj => (obj as any)[columnKey]) : [];
	console.log(valuesArray)
    chart.data.labels = valuesArray; // Ensure labels match the dataset length
    chart.data.datasets = [{
        label: 'Predictions',
        data: predictions.predictions,
        borderColor: getRandomColor(),
        fill: false,
        borderWidth: 2
    }];

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

<div class="chart-container" style="position: relative; height:400px; width:100%">
	<canvas id="chart"></canvas>
</div>

{#await loadModelData() then value}
	<GenericTable data={converted_table_data} columns={columns_meta_data} bind:this={tableInstance}></GenericTable>
{/await}

<button on:click={() => predict()} class="rounded-sm shadow-sm p-3 m-1">Predict</button>
