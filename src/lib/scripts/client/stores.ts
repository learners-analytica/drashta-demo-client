import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { EMenu } from './consts';

export const menu:Writable<EMenu> = writable(EMenu.Home);
const model_id:Writable<string | undefined> = writable(undefined);
const selected_columns:Writable<string[]> = writable([]);


// Menu

export function setMenu(value:EMenu):void{
    menu.set(value);
}
