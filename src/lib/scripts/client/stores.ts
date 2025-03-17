import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { EMenu } from './consts';
import type { TDashboardDefinition } from '$lib/types/user/dashboard';

export const menu:Writable<EMenu> = writable(EMenu.Home);
export const model_id:Writable<string|undefined> = writable("");
export const dashboard:Writable<TDashboardDefinition[]|undefined> = writable(undefined);

// STORES current

export const currentDashboardIndex:Writable<number> = writable(0);
export const currentTable:Writable<string> = writable("");
export const currentModelID:Writable<string> = writable("");

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

export function appendToDashboardAtIndex(index: number, newDashboard: TDashboardDefinition): void {
    dashboard.update((currentDashboards) => {
      if (currentDashboards) {
        return [...currentDashboards.slice(0, index), newDashboard, ...currentDashboards.slice(index)];
      } else {
        return [newDashboard];
      }
    });
  }

// Current Dashboard Index

export function setCurrentDashboardIndex(index:number):void{
    currentDashboardIndex.set(index);
}

// Current Model

export function setCurrentModelID(value:string):void{
  currentModelID.set(value);
}
