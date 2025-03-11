import type { TDataSeriesRaw, TTableHead, TTableMetaData, TTableStructure } from "@learners-analytica/drashta-types-ts";
import { bridgePostRequest, bridgeGetRequest } from "../utils/web/requestTemplates";

export async function getTableColumnData(table: string, column: string | null = null, size: number = 100): Promise<TDataSeriesRaw> {
    const body = { table: table, column: column, size: size };
    return bridgePostRequest<TDataSeriesRaw>('get-table-data', body, 'get table column data');
}

export async function getTableStructure(table:string): Promise<TTableStructure> {
    const body = {table : table}
    return bridgePostRequest<TTableStructure>('get-table-structure',body, 'get table list');
}

export async function getTableMetaData(table:string):Promise<TTableMetaData> {
    const body = {table:table}
    return bridgePostRequest<TTableMetaData>('get-table-metadata',body,'get table metadata')
}
