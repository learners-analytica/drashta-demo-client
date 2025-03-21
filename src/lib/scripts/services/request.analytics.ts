import type { MLTaskTypes, TDataArray } from '@learners-analytica/drashta-types-ts';
import type { TModelMetadata } from '@learners-analytica/drashta-types-ts';
import { analyticsPostRequest, analyticsGetRequest } from '../utils/web/requestTemplates';

export async function requestModelCreation(
    table: string,
    x: string[],
    y: string,
    model_name: string,
    size: Number = 1000,
    task: MLTaskTypes,
    time_budget: number
): Promise<TModelMetadata> {
    const body = {
        table: table,
        x: x,
        y: y,
        model_name: model_name,
        size: size,
        task: task,
        time_budget: time_budget
    };
    return analyticsPostRequest<TModelMetadata>("model-gen-query", body, 'model generation');
}

export async function requestModelList(): Promise<TModelMetadata[]> {
    const modelList = await analyticsGetRequest<TModelMetadata[]>("model-list", 'model list');
    console.log("request sent")
    return JSON.parse(JSON.stringify(modelList));
}

export async function requestModelPredict(
    x: TDataArray|undefined,
    model_id: string
): Promise<TDataArray> {
    const body = {
        x: x,
        model_id: model_id
    };
    return analyticsPostRequest<TDataArray>("run-predict-on-model", body, 'model prediction');
}

export async function requestModelDetails(model_id:string):Promise<TModelMetadata>{
    return analyticsPostRequest<TModelMetadata>(`model-details`,{"id":model_id}, 'model details');
}

export async function requestRemoveModel(model_id:string):Promise<any>{
    return analyticsPostRequest<any>(`remove-model`,{"id":model_id}, 'remove model');
}
