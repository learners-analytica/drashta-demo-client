import type { TDataSeriesRaw } from "@learners-analytica/drashta-types-ts";
import { PUBLIC_BRIDGE_SERVER } from '$env/static/public';

export async function getTableColumnData(table: string, column: string | null = null, size: number = 100): Promise<TDataSeriesRaw> {
    const url = `http://${PUBLIC_BRIDGE_SERVER}/supabase/get-table-data/`;
    const body = { table: table, column: column, size: size };
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    if (!response.ok) {
        throw new Error(`Failed to get table column data: ${response.statusText}`);
    }
    return response.json();
}

