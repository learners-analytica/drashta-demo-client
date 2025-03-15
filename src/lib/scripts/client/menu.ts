import { setMenu } from "./stores";
import { EMenu } from "./consts";

export function changeMenu(newMenu:EMenu):void{
    setMenu(newMenu)
}
