<script lang='ts'>
	import { onMount } from 'svelte';
	import { PUBLIC_BRIDGE_SERVER } from '$env/static/public';
	import { getTableColumnData } from '$lib/scripts/services/request.bridge';
	import { MainColor } from '$lib/scripts/utils/consts/colorMap';
	import CustomChart from '$lib/components/charts/custom-chart.svelte';
</script>

<style>
</style>


<CustomChart chartId='chart-1' chartType='bar' table='expense_request' column_x='expense_amount' column_y='expense_name' color_key={MainColor.Red}></CustomChart>
<CustomChart chartId='chart-2' chartType='line' table='expense_request' column_x='expense_amount' column_y='expense_name' color_key={MainColor.Black}></CustomChart>
<CustomChart chartId='chart-3' chartType='bar' table='expense_request' column_x='expense_amount' column_y='expense_name' color_key={MainColor.Blue}></CustomChart>
