import type { MLTaskTypes, TDataArray } from '@learners-analytica/drashta-types-ts';
import type { TModelMetadata } from '@learners-analytica/drashta-types-ts';
import { analyticsPostRequest, analyticsGetRequest } from '../utils/web/requestTemplates';

export async function requestModelCreation(
    table: string,
    x: string[],
    y: string,
    model_name: string,
    size: Number = 1000,
    task: MLTaskTypes
): Promise<TModelMetadata> {
    const body = {
        table: table,
        x: x,
        y: y,
        model_name: model_name,
        size: size,
        task: task
    };
    return analyticsPostRequest<TModelMetadata>("model-gen-query", body, 'model generation');
}

export async function requestModelList(): Promise<TModelMetadata[]> {
    return analyticsGetRequest<TModelMetadata[]>("model-list", 'model list');
}

export async function requestModelPredict(
    x: any[],
    model_id: string
): Promise<TDataArray> {
    const body = {
        x: x,
        model_id: model_id
    };
    return analyticsPostRequest<TDataArray>("model-prediction", body, 'model prediction');
}

