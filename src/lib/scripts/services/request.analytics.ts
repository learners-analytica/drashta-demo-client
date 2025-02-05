import type { DataSeries, TableStructure } from "@learners-analytica/drashta-types-ts";
export namespace GET{
}

export namespace POST{
    export async function executeQueryTrainAutoML(
        data_columns : string,
        task_type : string,
        optimization_metric : string,
        time_limit : string,
        model_name : string,
        train_split: string,
        val_split: string,
        test_split: string
    ): Promise<any> {
        const url = `${import.meta.env.VITE_ANALYTICS_PACKAGE_URL}/train/`;
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                task_type,
                data_columns,
                optimization_metric,
                time_limit,
                model_name,
                train_split,
                val_split,
                test_split
            }),
        });
        const data = await res.json() as DataSeries[];
        return data;
    }

    export async function predictDataOnModel(
        model_name : string,
        data_columns : string
    ): Promise<any> {
        const url = `${import.meta.env.VITE_ANALYTICS_PACKAGE_URL}/predict/`;
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model_name,
                data_columns
            }),
        });
        const data = await res.json() as DataSeries[];
        return data;
    }
}