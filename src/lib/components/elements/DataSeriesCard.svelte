<script lang="ts">
	import type { TDataSeries } from '@learners-analytica/drashta-types-ts';
	import { MainColor } from '$lib/scripts/utils/consts/colorMap';
	import InputDataTable from './InputDataTable.svelte';
	export let columnMetaData: TDataSeries;

	const colorValues = Object.values(MainColor);
	const randomColor = colorValues[Math.floor(Math.random() * colorValues.length)];
</script>

<div class="flex flex-col align-start p-2 shadow-sm m-3 min-w-100">
	<div class={`bg-${randomColor}-100 font-bold`}>
		<h1>{columnMetaData.column_name}</h1>
	</div>
	<h2>{columnMetaData.column_type}</h2>
	<p>Count: {columnMetaData.column_count !== null ? columnMetaData.column_count : 'NA'}</p>
	<p>Average: {columnMetaData.column_avg !== null ? columnMetaData.column_avg : 'NA'}</p>
	<p>Minimum: {columnMetaData.column_max !== null ? columnMetaData.column_max : 'NA'}</p>
	<p>Maximum: {columnMetaData.column_min !== null ? columnMetaData.column_min : 'NA'}</p>
	<h3>Data Preview</h3>
<div class="table-container w-90 h-90 overflow-auto">
    <table class="table-auto w-90 h-90 shadow-sm  rounded-sm p-1">
        <tbody class="overflow-y-scroll w-full h-90">
            {#each columnMetaData.column_data as data}
            <tr class="border-0	 m-1">
                <td class="border-0 text-left shadow-sm p-1 m-1">{data}</td>    
            </tr>
            {/each}
        </tbody>
    </table>
</div>
</div>
