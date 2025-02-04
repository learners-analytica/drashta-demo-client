<script lang='ts'>
	import CustomChart from './../lib/components/charts/custom-chart.svelte';
	import { onMount } from 'svelte';
	import type { ChartDataset } from 'chart.js/auto';

	let data_columns = [];
	let Order_data: ChartDataset[] = [];
	$: Order_data;  // This tells Svelte to watch for changes in Order_data
	let render_chart = false;

	onMount(async () => {
		data_columns = await fetch('http://0.0.0.0:8000/struct/').then(r => r.json());
		console.log(data_columns)
		render_chart = true;
		const data_columns_str = data_columns[0];
		const target = data_columns[12];
		console.log(data_columns_str);

		const trainParams = new URLSearchParams({
            target_column: target,
            task_type: "regression",
            optimization_metric: "accuracy",
            time_limit: 10,
            model_name: "some_model",
            train_split: "0.8",
            val_split: "0.1",
            test_split: "0.1"
        });

        try {
            const response = await fetch(`http://0.0.0.0:8000/train/?${trainParams.toString()}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    target_column: target,
                    task_type: "regression",
                    optimization_metric: "accuracy",
                    time_limit: 10,
                    model_name: "some_model",
                    train_split: "0.8",
                    val_split: "0.1",
                    test_split: "0.1"
                })
            });
            const model = await response.json();
            console.log('Trained Model:', model);
        } catch (error) {
            console.error('Error during model training:', error);
        }
	});
</script>

<style>
	.custom-chart {
		display: inline-block;
		width: calc(33.33% - 1em);
		margin: 0.5em;
	}
</style>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1em;">
{#if render_chart}
	<CustomChart class="custom-chart" chartId='myChart' chartType='line' x={data_columns[0]} y={data_columns[12]} />
	<CustomChart class="custom-chart" chartId='myChart2' chartType='bar' x={data_columns[0]} y={data_columns[9]} />
	<CustomChart class="custom-chart" chartId='myChart3' chartType='line' x={data_columns[0]} y={data_columns[10]} />
{/if}
</div>

