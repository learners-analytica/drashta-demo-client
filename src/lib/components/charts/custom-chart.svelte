<script lang="ts">
    import { onMount } from 'svelte';
    import { Chart, type ChartDataset, type ChartType, type ChartTypeRegistry } from 'chart.js/auto';

    let ctx: Chart | null = null;

    export let chartId: string;
    export let chartType:keyof ChartTypeRegistry = 'line' as keyof ChartTypeRegistry;
    export let x:string;
    export let y:string
    let chartData: ChartDataset[] = [
    ];


    onMount(async() => {
        const params = new URLSearchParams({
			columns: x,
			target_column: y,
			tail_size: "10"
		});
        const data = await fetch(`http://0.0.0.0:8000/data/?${params.toString()}`)
			.then(response => response.json())
			.catch(error => console.error(error));
		console.log(data.map((row: any) => row['Date']))
		chartData = [{
			label: y,
			data: data.map((row: any) => row[y]),
			borderColor: 'rgb(255, 99, 132)',
			fill: false,
			tension: 0.1
		}];
        console.log(chartData)
        const canvas = document.getElementById(chartId) as HTMLCanvasElement;
        if (canvas) {
            ctx = new Chart(canvas, {
                type: chartType,
                data: {
                    labels: data.map((row: any) => row[x]),
                    datasets: chartData
                },
                options: {}
            });
        }
    });
</script>
<div>
<canvas id={chartId}></canvas>
</div>
