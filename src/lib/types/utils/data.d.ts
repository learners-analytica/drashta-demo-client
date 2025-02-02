export interface TableData{
    columnsNames :string[],
    data: JSON
}


export type TableStructData = {
    tableName:string
    tableDisplayName:string|null
}