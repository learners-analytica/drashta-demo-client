import { PUBLIC_ANALYTICS_SERVER } from '$env/static/public';
import type { MLTaskTypes, TDataArray } from '@learners-analytica/drashta-types-ts';
import type { TModelMetadata } from '@learners-analytica/drashta-types-ts';

export async function requestModelCreation(
    table: string,
    x: string[],
    y: string,
    model_name: string,
    size: Number = 1000,
    task: MLTaskTypes
): Promise<TModelMetadata> {
    const url = `http://${PUBLIC_ANALYTICS_SERVER}/model-gen-query`
    const body = {
        table: table,
        x: x,
        y: y,
        model_name: model_name,
        size: size,
        task: task
    }
    const response = await fetch(
        url,
        {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        }
    )
    if (!response.ok) {
        throw new Error(`Failed to request model generation: ${response.statusText}`);
    }
    return response.json();
}

export async function requestModelList():Promise<TModelMetadata[]>{
    const url = `http://${PUBLIC_ANALYTICS_SERVER}/model-list`
    const response = await fetch(
        url,
        {
            method:"GET"
        }
    )
    if (!response.ok) {
        throw new Error(`Failed to get model list: ${response.statusText}`);
    }
    return response.json();
}

export async function requestModelPredict(
    x:any[],
    model_id:string
):Promise<TDataArray>{
    const url = `http://${PUBLIC_ANALYTICS_SERVER}/run-predict-on-model`
    const body = {
        x:x,
        model_id:model_id
    }
    const response = await fetch(
        url,
        {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        }
    )
    if (!response.ok) {
        throw new Error(`Failed to request model generation: ${response.statusText}`);
    }
    return response.json(); 
}
