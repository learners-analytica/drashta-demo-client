<script lang="ts">
	import { currentModelID } from '$lib/scripts/client/stores';
	import { requestModelDetails, requestModelPredict } from '$lib/scripts/services/request.analytics';
	import { generateObjectArrayFromTDataSeries, generateTabularColumnMetaData } from '$lib/scripts/utils/misc/conversion';
	import type { TDataArray, TDataSeriesMinimal } from '@learners-analytica/drashta-types-ts';
	import { onMount } from 'svelte';
	import { TabulatorFull as Tabulator } from 'tabulator-tables';

	let predictions: TDataArray[] = [];
	$: predictions = [];
	let data_columns: TDataSeriesMinimal[] = [];
	$: data_columns;
	let converted_table_data: TDataArray = [];
	$: converted_table_data;
	let tableComponent: HTMLElement | null = null; // Ensure correct typing for Svelte binding
	let tableInstance: Tabulator | null = null; // Store Tabulator instance separately

	async function printSetData() {
		if (tableInstance) {
			console.log(tableInstance.getData()); // Now correctly accessing Tabulator instance
			return tableInstance.getData();
		} else {
			console.error('Tabulator instance is not initialized');
		}
	}

	async function predict(){
		let x = await (printSetData()) as TDataArray;
		requestModelPredict(x,$currentModelID);
	}

	onMount(async () => {
		data_columns = (await requestModelDetails($currentModelID)).columns;
		converted_table_data = generateObjectArrayFromTDataSeries(data_columns, 5);
		let columns_meta_data = generateTabularColumnMetaData(data_columns);

		if (tableComponent) {
			tableInstance = new Tabulator(tableComponent, {
				data: converted_table_data,
				layout: 'fitColumns',
				//@ts-expect-error
				columns: columns_meta_data
			});
		} else {
			console.error('tableComponent is not available');
		}
	});
</script>

<div bind:this={tableComponent}></div>

<button on:click={() => printSetData()}>Print Set Data</button>
<button on:click={() => predict()}>Predict</button>
