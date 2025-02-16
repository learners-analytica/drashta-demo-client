import type { DataSeries, TableStructure } from "@learners-analytica/drashta-types-ts";

export namespace BRIDGE_GET {
  export async function tableStructures(): Promise<TableStructure[]> {
    const url = `${import.meta.env.BRIDGE_SERVER}/struct/`;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = (await res.json()) as TableStructure[];
    return data;
  }
}

export namespace BRIDGE_POST {
  export async function returnAggData(
    table: string,
    columns: string,
    agg: string
  ): Promise<DataSeries[]> {
    const url = `${import.meta.env.BRIDGE_SERVER}/agg-data/`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        table,
        columns,
        agg,
      }),
    });
    const data = (await res.json()) as DataSeries[];
    if (data) {
      return data;
    }
    console.error({
      message: "No data returned",
    });
    return [] as DataSeries[];
  }

  export async function getTableData(table: string): Promise<DataSeries[]> {
    const url = `${import.meta.env.BRIDGE_SERVER}/get-data/`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        table,
      }),
    });
    const data = (await res.json()) as DataSeries[];
    if (data) {
      return data;
    }
    console.error({
      message: "No data returned",
    });
    return [] as DataSeries[];
  }
}

