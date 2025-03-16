import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { EMenu } from './consts';
import type { TDashboardDefinitionDoc } from '$lib/types/user/dashboard';
import { PUBLIC_DASHBOARD_DEFINITION_DOC } from "$env/static/public";

export const menu:Writable<EMenu> = writable(EMenu.Home);
export const model_id:Writable<string|undefined> = writable("");
export const dashboard:Writable<TDashboardDefinitionDoc|undefined> = writable(undefined);

// Menu

export function setMenu(value:EMenu):void{
    menu.set(value);
}

// Model ID

export function setModelId(value:string):void{
    model_id.set(value)
}

export function resetModelId():void{
    model_id.set(undefined)
}

// Dashboard

export function setDashboard(value:TDashboardDefinitionDoc):void{
    dashboard.set(value);
}

async function setDashboardFromFile(path:string):Promise<void>{
    const response = await fetch(`${path}`);
    if (!response.ok) {
        throw new Error(`Failed to load dashboard from file ${path}: ${response.statusText}`);
    }
    const data = await response.json();
    setDashboard(data);
}


export async function loadDashboard():Promise<void>{
    if(PUBLIC_DASHBOARD_DEFINITION_DOC !== undefined){
        await setDashboardFromFile(PUBLIC_DASHBOARD_DEFINITION_DOC);
    }
}