<script lang="ts">
    import { onMount } from 'svelte';
    import { Chart, type ChartDataset, type ChartType, type ChartTypeRegistry } from 'chart.js/auto';
    import type { BubbleDataPoint, Point } from 'chart.js/auto';
    import { getTableColumnData } from '$lib/scripts/services/request.bridge';
    import type {TDataSeriesRaw} from "@learners-analytica/drashta-types-ts"
    import { MainColor, returnColorStruct } from '$lib/scripts/utils/consts/colorMap';
	import type { TCustomChartConfig } from '$lib/types/user/dashboard';
    let ctx: Chart | null = null;


    export let chartConfig : TCustomChartConfig
    export let chartId: string = crypto.randomUUID()
    let chartData: ChartDataset[] = [];

    async function getChartData():Promise<{x:TDataSeriesRaw, y:TDataSeriesRaw}>{
        const dataSeriesX:TDataSeriesRaw = await getTableColumnData(chartConfig.source_table,chartConfig.data_column);
        const dataSeriesY:TDataSeriesRaw = await getTableColumnData(chartConfig.source_table,chartConfig.index_column);
        return {
            x:dataSeriesX,
            y:dataSeriesY
        }
    }


    onMount(async() => {
        let colorStruct = returnColorStruct(chartConfig.color_key)
        const {x,y} = await getChartData();
        console.log(x,y);
		chartData = [{
			label: x.column_name,
			data: x.column_data as (number | [number, number] | Point | BubbleDataPoint | null)[],
			borderColor: colorStruct.border,
			fill: colorStruct.fill,
            backgroundColor:colorStruct.fill,

			tension: 0.1
		}];
        const canvas = document.getElementById(chartId) as HTMLCanvasElement;
        if (canvas) {
            ctx = new Chart(canvas, {
                type: chartConfig.chart_type as keyof ChartTypeRegistry,
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
