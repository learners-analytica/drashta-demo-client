import type {ChartDataset} from "chart.js/auto"
import type { DataSeries, pingResponse } from "@learners-analytica/drashta-types-ts";

export function convertDataSeriesToChartDataSet(dataSeries:DataSeries):ChartDataset{
    return {
        label: dataSeries.seriesName,
        data: [...dataSeries.seriesData],
        
    }
}

export function setColorToChartDataSet(chartDataset:ChartDataset,colors:{
    borderColor:string,
    backgroundColor:string
}){
    chartDataset.borderColor = colors.borderColor
    chartDataset.backgroundColor = colors.backgroundColor
}