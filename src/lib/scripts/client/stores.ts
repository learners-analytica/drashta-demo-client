import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { EMenu } from './consts';
import type { TDashboardDefinition } from '$lib/types/user/dashboard';

export const menu:Writable<EMenu> = writable(EMenu.Home);
export const model_id:Writable<string|undefined> = writable("");
export const dashboard:Writable<TDashboardDefinition[]|undefined> = writable(undefined);

// STORES current

export const currentDashboardIndex:Writable<number> = writable(0);


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

export function setDashboard(value:TDashboardDefinition[]):void{
    dashboard.set(value);
}

export async function setDashboardFromFile(path:string):Promise<void>{
    const response = await fetch(`${path}`);
    if (!response.ok) {
        throw new Error(`Failed to load dashboard from file ${path}: ${response.statusText}`);
    }
    const data = await response.json();
    setDashboard(data);
}