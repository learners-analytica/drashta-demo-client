import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { EMenu } from './consts';

export const menu:Writable<EMenu> = writable(EMenu.Home);
const model_id:Writable<string|undefined> = writable("");
const selected_columns:Writable<string[]> = writable([]);


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

// Selected Columns

function addColumn(newColumn:string):void{
    let currentColumns = selected_columns.update()
    currentColumns
}

function removeColumn(newColumn:string):void{

}
