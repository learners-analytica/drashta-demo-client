import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { EMenu } from './consts';

export const menu:Writable<EMenu> = writable(EMenu.Home);
export const model_id:Writable<string|undefined> = writable("");


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