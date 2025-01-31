<script lang="ts">
    import { onMount } from 'svelte';
    import { Chart, type ChartDataset, type ChartType, type ChartTypeRegistry } from 'chart.js/auto';

    let ctx: Chart | null = null;

    export const chartId: string = 'myChart';
    export const chartType:keyof ChartTypeRegistry = 'line' as keyof ChartTypeRegistry;
    export const chartData: ChartDataset[] = [
        {
            label: 'Dataset 1',
            data: [10, 20, 30, 40, 50],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1
        },
        {
            label: 'Dataset 2',
            data: [15, 25, 35, 45, 55],
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderWidth: 1
        }
    ];

    onMount(() => {
        const canvas = document.getElementById(chartId) as HTMLCanvasElement;
        if (canvas) {
            ctx = new Chart(canvas, {
                type: chartType,
                data: {
                    labels: [1, 2, 3, 4, 5],
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