import type { DataSeries } from "@learners-analytica/drashta-types-ts";


export async function queryGetTable(tableName: string): Promise<DataSeries[]> {
    const url = `${import.meta.env.VITE_ANALYTICS_PACKAGE_URL}/query/table`;
    const data = {
        tableName
    };

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const dataSeries: DataSeries[] = await res.json();
        return dataSeries;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
