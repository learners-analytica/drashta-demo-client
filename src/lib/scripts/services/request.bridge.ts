import type { DataSeries, TableStructure } from "@learners-analytica/drashta-types-ts";

export namespace GET {
  export async function tableStructures(): Promise<TableStructure[]> {
    const url = `${import.meta.env.VITE_ANALYTICS_PACKAGE_URL}/struct/`;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json() as TableStructure[];
    return data;
  }

  export async function tableData(): Promise<DataSeries[]> {
    return [] as DataSeries[];
  }
}

export namespace POST {
    export async function returnAggData(
        table:string,
        columns:string,
        agg:string
    ){

    }
}
