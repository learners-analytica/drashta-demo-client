<script lang="ts">
	import { currentModelID } from '$lib/scripts/client/stores';
	import { requestModelDetails } from '$lib/scripts/services/request.analytics';
	import { generateObjectArrayFromTDataSeries } from '$lib/scripts/utils/misc/conversion';
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
		} else {
			console.error('Tabulator instance is not initialized');
		}
	}

	onMount(async () => {
		data_columns = (await requestModelDetails($currentModelID)).columns;
		converted_table_data = generateObjectArrayFromTDataSeries(data_columns, 5);

		if (tableComponent) {
			tableInstance = new Tabulator(tableComponent, {
				data: converted_table_data,
				layout: 'fitColumns',
				columns: data_columns.map((col) => ({
					title: col.column_name,
					field: col.column_name,
					editor: 'input' // Allow inline editing
				}))
			});
		} else {
			console.error('tableComponent is not available');
		}
	});
</script>

<div bind:this={tableComponent}></div>

<button on:click={() => printSetData()}>Print Set Data</button>
