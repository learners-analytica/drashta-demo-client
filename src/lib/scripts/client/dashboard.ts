import type { TDashboardDefinition, TDashboardEntry, ChartType } from "$lib/types/user/dashboard";
import { setDashboardFromFile, setCurrentDashboardIndex } from "./stores";
import { PUBLIC_DASHBOARD_DEFINITION_DOC } from "$env/static/public";
import type { TCustomChartConfig, } from "$lib/types/user/dashboard";
import { MainColor } from "../utils/consts/colorMap";
import Chart from 'chart.js/auto';
import { dashboard, currentDashboardIndex } from "./stores";

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


export function saveDashboardToFile(dashboard:TDashboardDefinition[]):void{
    const blob = new Blob([JSON.stringify(dashboard)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = PUBLIC_DASHBOARD_DEFINITION_DOC;
    a.click();
}

export function addNewVisualizationConfiguration(
    chart_type:ChartType,
    source_table:string,
    index_column:string,
    data_column:string,
    color_key:MainColor,
    size:number,
    dashboard:TDashboardDefinition
):void{
    const vizConf:TCustomChartConfig = {
        chart_type: chart_type,
        source_table: source_table,
        index_column: index_column,
        data_column: data_column,
        color_key: color_key,
        size:size
    }
    dashboard.visualization.push(vizConf);
    saveDashboardToFile([dashboard]);
}
