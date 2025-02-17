<script lang="ts">
    import { onMount } from 'svelte';
    import { Chart, type ChartDataset, type ChartType, type ChartTypeRegistry } from 'chart.js/auto';
    import { getTableColumnData } from '$lib/scripts/services/request.bridge';
    import { MainColor, returnColorStruct } from '$lib/scripts/utils/consts/colorMap';
    let ctx: Chart | null = null;

    export let chartId: string;
    export let chartType:keyof ChartTypeRegistry = 'line' as keyof ChartTypeRegistry;
    export let table:string;
    export let column_x:string;
    export let column_y:string
    export let color_key:MainColor
    let chartData: ChartDataset[] = [
    ];

    async function getChartData():Promise<{x:any, y:any}>{
        const dataSeriesX:any = await getTableColumnData(table,column_x);
        const dataSeriesY:any = await getTableColumnData(table,column_y);
        return {
            x:dataSeriesX,
            y:dataSeriesY
        }
    }


    onMount(async() => {
        let colorStruct = returnColorStruct(color_key)
        const {x,y} = await getChartData();
        console.log(x,y);
		chartData = [{
			label: x.column_name,
			data: x.column_data,
			borderColor: colorStruct.border,
			fill: colorStruct.fill,
            backgroundColor:colorStruct.fill,

			tension: 0.1
		}];
        const canvas = document.getElementById(chartId) as HTMLCanvasElement;
        if (canvas) {
            ctx = new Chart(canvas, {
                type: chartType,
                data: {
                    labels: y.column_data,
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
