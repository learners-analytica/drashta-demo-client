<script lang="ts">
    import { onMount } from 'svelte';
    import { Chart, type ChartDataset, type ChartType, type ChartTypeRegistry } from 'chart.js/auto';
    import { getTableColumnData } from '$lib/scripts/services/request.bridge';
    import type { TDataSeries } from '@learners-analytica/drashta-types-ts';
    let ctx: Chart | null = null;

    export let chartId: string;
    export let chartType:keyof ChartTypeRegistry = 'line' as keyof ChartTypeRegistry;
    export let table:string;
    export let column_x:string;
    export let column_y:string
    let chartData: ChartDataset[] = [
    ];

    async function getChartData():Promise<{x:TDataSeries, y:TDataSeries}>{
        const dataSeriesX:TDataSeries = await getTableColumnData(table,column_x);
        const dataSeriesY:TDataSeries = await getTableColumnData(table,column_y);
        return {
            x:dataSeriesX,
            y:dataSeriesY
        }
    }


    onMount(async() => {
        const {x,y} = await getChartData();
        console.log(x.series_data)
		chartData = [{
			label: x.series_name,
            //@ts-expect-error
			data: x.series_data,
			borderColor: 'rgb(255, 99, 132)',
			fill: false,
			tension: 0.1
		}];
        const canvas = document.getElementById(chartId) as HTMLCanvasElement;
        if (canvas) {
            ctx = new Chart(canvas, {
                type: chartType,
                data: {
                    //@ts-expect-error
                    labels: y.series_data,
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
