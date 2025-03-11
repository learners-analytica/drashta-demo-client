<script lang="ts">
	import type { TDataSeries } from '@learners-analytica/drashta-types-ts';
	export let columnMetaData: TDataSeries;
</script>

<div>
	<h1>{columnMetaData.column_name}</h1>
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

	<table>
		<tbody>
			<tr>
				{#each columnMetaData.column_data as data}
					<td>{data}</td>
				{/each}
			</tr>
		</tbody>
	</table>
</div>
