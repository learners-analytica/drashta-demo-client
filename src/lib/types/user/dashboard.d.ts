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
