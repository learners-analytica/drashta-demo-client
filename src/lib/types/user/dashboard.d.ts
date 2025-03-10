import type { MainColor } from "$lib/scripts/utils/consts/colorMap"
import type { DataSeries } from "@learners-analytica/drashta-types-ts"
import type {ChartTypeRegistry} from "chartjs/auto"

type chartDataSeries = {
    label: string
    data : (string | number)[]
}

export type chartDescription = {
    chart_id : string
    table: string
}

export type TCustomChartConfig = {
    chart_type : keyof ChartTypeRegistry
    source_table : str
    index_column : str
    data_column : str
    color_key : MainColor
    size : int
}

export type TVisualizationDefinition = TCustomChartConfig[]
