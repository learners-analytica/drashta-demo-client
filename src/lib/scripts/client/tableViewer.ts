import { currentTable } from "./stores";
import { changeMenu } from "./menu";
import { EMenu } from "./consts";

export function tableForModelQuery(value:string):void{
    currentTable.set(value);
    changeMenu(EMenu.ModelQuery);
}