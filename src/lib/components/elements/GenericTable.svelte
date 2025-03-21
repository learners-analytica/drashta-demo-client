<script lang="ts">
    import { TabulatorFull as Tabulator } from "tabulator-tables";
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

<div bind:this={tableComponent}></div>
