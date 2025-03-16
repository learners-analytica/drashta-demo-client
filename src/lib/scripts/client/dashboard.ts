import type { TDashboardDefinition, TDashboardEntry } from "$lib/types/user/dashboard";
import { setDashboardFromFile, dashboard } from "./stores";
import { PUBLIC_DASHBOARD_DEFINITION_DOC } from "$env/static/public";

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