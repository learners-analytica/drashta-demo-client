import type { TDataArray, TDataSeriesMinimal } from "@learners-analytica/drashta-types-ts";

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
