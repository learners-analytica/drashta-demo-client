import type {ChartDataset} from "chart.js/auto"
import type { DataSeries } from "@learners-analytica/drashta-types-ts";

export function convertDataSeriesToChartDataSet(dataSeries:DataSeries):ChartDataset{
    return {
        label: dataSeries.seriesName,
        data: [...dataSeries.seriesData],
        
    }
}