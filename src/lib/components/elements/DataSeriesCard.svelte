<script lang="ts">
	import type { TDataSeries } from '@learners-analytica/drashta-types-ts';
	import InputDataTable from './InputDataTable.svelte';
	export let columnMetaData: TDataSeries;
</script>

<div class="flex flex-col align-start p-2 shadow-sm m-3">
	<div class="">
	<h1>{columnMetaData.column_name}</h1>
	</div>
	<h2>{columnMetaData.column_type}</h2>
	<p>{columnMetaData.column_count}</p>

	{#if columnMetaData.column_avg !== null}
		<p>Average: {columnMetaData.column_avg}</p>
	{/if}
	{#if columnMetaData.column_max !== null}
		<p>Minimum: {columnMetaData.column_max}</p>
	{/if}
	{#if columnMetaData.column_min !== null}
		<p>Maximum: {columnMetaData.column_min}</p>
	{/if}

	<table class="table-fixed overflow-y-scroll flex flex-column">
		<tbody>
			<tr>
				{#each columnMetaData.column_data as data}
				<td>{data}</td>	
				{/each}
			</tr>
		</tbody>
	</table>
</div>
