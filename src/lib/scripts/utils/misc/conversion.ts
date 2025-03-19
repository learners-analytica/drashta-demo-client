import type { TDataArray, TDataSeriesMinimal } from "@learners-analytica/drashta-types-ts";
import { sqlTypesMap } from "../consts/typesMap";

export function generateObjectArrayFromTDataSeries(columnsData: TDataSeriesMinimal[], size: number) {
    let objectArray: TDataArray = [];

    for (let i = 0; i < size; i++) {
        let objectRow: Record<string, any> = {};

        columnsData.forEach(column => {
            objectRow[column.column_name] = 0; // Initialize each column with a null value
        });

        objectArray.push({ ...objectRow }); // Ensure a unique object instance
    }

    return objectArray;
}

export function generateTabularColumnMetaData(columnsData: TDataSeriesMinimal[]):{
    title: string;
    field: string;
    editor: string;
}[] {
    const columnsMetaData:{title:string, field:string, editor:string}[] = [];
    columnsData.forEach((column) => {
        columnsMetaData.push({
            title: column.column_name,
            field: column.column_name,
            editor: sqlTypesMap[column.column_type] || "string"
        });
    });
    return columnsMetaData;
}
