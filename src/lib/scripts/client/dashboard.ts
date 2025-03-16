import type { TDashboardDefinition, TDashboardEntry, ChartType } from "$lib/types/user/dashboard";
import { setDashboardFromFile, setCurrentDashboardIndex } from "./stores";
import { PUBLIC_DASHBOARD_DEFINITION_DOC } from "$env/static/public";
import type { TCustomChartConfig, } from "$lib/types/user/dashboard";
import { MainColor } from "../utils/consts/colorMap";
import Chart from 'chart.js/auto';

export function extractDashboardEntryList(Doc: TDashboardDefinition[]): TDashboardEntry[] {
    return Doc.map((dashboard, index) => ({
        name: dashboard.name,
        index
    }));
}

export async function loadDashboard():Promise<void>{
    if(PUBLIC_DASHBOARD_DEFINITION_DOC !== undefined){
        await setDashboardFromFile(PUBLIC_DASHBOARD_DEFINITION_DOC);
    }
}

export function switchDashboardEntry(index:number):void{
    setCurrentDashboardIndex(index);
}

export function addNewVisualizationConfiguration(
    chart_type:ChartType,
    source_table:string,
    index_column:string,
    data_column:string,
    color_key:MainColor,
    size:number
):void{
    const vizConf:TCustomChartConfig = {
        chart_type: chart_type,
        source_table: source_table,
        index_column: index_column,
        data_column: data_column,
        color_key: color_key,
        size:size
    }
}
