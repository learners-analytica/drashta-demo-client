<script lang='ts'>
	import { onMount } from 'svelte';
	import { PUBLIC_BRIDGE_SERVER } from '$env/static/public';
	import { getTableColumnData } from '$lib/scripts/services/request.bridge';
	import CustomChart from '$lib/components/charts/custom-chart.svelte';
</script>

<style>
</style>


<CustomChart chartId='chart-1' chartType='bar' table='expense_request' column_x='expense_amount' column_y='expense_name'></CustomChart>
<CustomChart chartId='chart-2' chartType='line' table='expense_request' column_x='expense_amount' column_y='expense_name'></CustomChart>
<CustomChart chartId='chart-3' chartType='bar' table='expense_request' column_x='expense_amount' column_y='expense_name'></CustomChart>
