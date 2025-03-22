<script lang="ts">
    import { TabulatorFull as Tabulator } from "tabulator-tables";
    import "tabulator-tables/dist/css/tabulator.min.css";
    import { onMount } from "svelte";
	import type { TDataArray } from "@learners-analytica/drashta-types-ts";
    export let data
    export let columns

    let tableComponent:string|HTMLElement|undefined = undefined;
    let tableInstance:Tabulator|undefined = undefined;

    export function getData():TDataArray|undefined{
        return tableInstance?.getData();
    }
    onMount(() => {
        console.log(columns)
		if (tableComponent) {
			tableInstance = new Tabulator(tableComponent, {
				data: data,
				layout: 'fitColumns',
				columns: columns
			});
		} else {
			console.error('tableComponent is not available');
		}
    })
</script>

<div bind:this={tableComponent} class="w-full h-full m-3 overflow-auto rounded-lg shadow-lg border border-gray-200"></div>
