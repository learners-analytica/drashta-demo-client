<script lang="ts">
    import type { TDashboardDefinition } from "$lib/types/user/dashboard";
    import { dashboard, currentDashboardIndex } from "$lib/scripts/client/stores";
    import { MainColor } from "$lib/scripts/utils/consts/colorMap";
    import { addNewVisualizationConfiguration } from "$lib/scripts/client/dashboard";
    import { getTableList, getTableStructure } from "$lib/scripts/services/request.bridge";
    import type { TTableStructure } from "@learners-analytica/drashta-types-ts";

    let chart_type: string = 'line';
    let source_table: string = '';
    let index_column: string = '';
    let data_column: string = '';
    let color_key: MainColor = MainColor.Red;
    export let isDialogOpen: boolean = true;

    function getDashboard(): TDashboardDefinition {
        if ($dashboard && $currentDashboardIndex >= 0 && $currentDashboardIndex < $dashboard.length) {
            return $dashboard[$currentDashboardIndex];
        }
        return { name: '', description: '', visualization: [] };
    }

    function handleSubmit(event: Event) {
        event.preventDefault();
        let dashboard = getDashboard();
        addNewVisualizationConfiguration(
            chart_type,
            source_table,
            index_column,
            data_column,
            color_key,
            100,
            dashboard
        );
        isDialogOpen = false;
    }
</script>

<dialog class:is-open={isDialogOpen}>
    <form on:submit={handleSubmit}>
        <label for="chartType">Chart Type:</label>
        <input id="chartType" bind:value={chart_type} required>

        <label for="sourceTable">Source Table:</label>
        <select id="sourceTable" bind:value={source_table} required>
            {#await getTableList() then tableList}
                {#each tableList as table}
                    <option value={table}>{table}</option>
                {/each}
                <option value="">Loading...</option>
            {/await}
        </select>

        <label for="indexColumn">Index Column:</label>
        <select id="indexColumn" bind:value={index_column} required>
            {#await getTableStructure(source_table) then tableStructure}
                {#each tableStructure.table_column_head_data as column}
                    <option value={column.column_name}>{column.column_name}</option>
                {/each}
                <option value="">Loading...</option>
            {/await}
        </select>

        <label for="dataColumn">Data Column:</label>
        <select id="dataColumn" bind:value={data_column} required>
            {#await getTableStructure(source_table) then tableStructure}
                {#each tableStructure.table_column_head_data as column}
                    <option value={column.column_name}>{column.column_name}</option>
                {/each}
                <option value="">Loading...</option>
            {/await}
        </select>

        <label for="colorKey">Color Key:</label>
        <select id="colorKey" bind:value={color_key}>
            {#each Object.values(MainColor) as color}
                <option value={color}>{color}</option>
            {/each}
        </select>

        <button type="submit">Add Visualization</button>
    </form>
</dialog>

