import type {ChartTypeRegistry} from "chartjs/auto"

export type chartConfig = {
    table: string
    series : string
    x : string
    y : string
    type : ChartTypeRegistry
    color : string | null
}