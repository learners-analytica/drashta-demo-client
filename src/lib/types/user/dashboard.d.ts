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

export type ChartType = keyof ChartTypeRegistry

export type TCustomChartConfig = {
    chart_type : ChartType
    source_table : str
    index_column : str
    data_column : str
    color_key : MainColor
    size : int
}

export type TVisualizationDefinition = TCustomChartConfig[]

export type TDashboardDefinition = {
    name : string
    description : string
    visualization : TVisualizationDefinition
}

export type TDashboardDefinitionDoc = TDashboardDefinition[]

export type TDashboardEntry = { name:string, index:number}
