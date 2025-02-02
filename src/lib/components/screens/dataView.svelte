<script lang="ts">
	import type { TableStructData } from "$lib/types/utils/data";
    import type { DataSeries } from "@learners-analytica/drashta-types-ts";
	import TablesList from "../elements/tables-list.svelte";
	import TablesViewer from "../elements/tables-viewer.svelte";

    

    let tableList:TableStructData[] = [
        {tableName: "customers", tableDisplayName: "Customer List"},
        {tableName: "orders", tableDisplayName: "Order List"},
        {tableName: "employees", tableDisplayName: "Employee List"},
        {tableName: "products", tableDisplayName: "Product List"},
        {tableName: "suppliers", tableDisplayName: "Supplier List"},
        {tableName: "shippers", tableDisplayName: "Shipper List"},
        {tableName: "categories", tableDisplayName: "Category List"},
        {tableName: "order_details", tableDisplayName: "Order Details List"},
    ]
    
    let exampleDataSeries:DataSeries[] = [
        {seriesName: "Price", seriesData: [10,20,30,40,50], seriesType: "number"},
        {seriesName: "Date", seriesData: ["2022-01-01", "2022-01-02", "2022-01-03", "2022-01-04", "2022-01-05"], seriesType: "date"},
        {seriesName: "Name", seriesData: ["John", "Paul", "George", "Ringo", "Pete"], seriesType: "string"},
    ]
    let testCallback = (args:string):void => {
        console.log(args);
    }
</script>

<TablesList tableNames={tableList} callbackTableNames={testCallback}></TablesList>
<TablesViewer tableColumns={exampleDataSeries} columnSelectionCallbackFunction={testCallback}></TablesViewer>
