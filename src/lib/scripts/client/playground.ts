import { setCurrentModelID } from "./stores";
import { EMenu } from "./consts";
import { changeMenu } from "./menu";


export function modelForPlayground(model_id:string):void{
    setCurrentModelID(model_id);
    changeMenu(EMenu.Playground);
}