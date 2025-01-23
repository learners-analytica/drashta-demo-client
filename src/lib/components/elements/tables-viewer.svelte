<script lang="ts">
    export let tableData: JSON

    let columns: string[] = []
    let data: any[] = []

    if (tableData) {
        columns = Object.keys(tableData[0])
        data = tableData
    }
</script>

<table>
    <thead>
        <tr>
            {#each columns as column}
                <th>{column}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each data as row}
            <tr>
                {#each columns as column}
                    <td>{row[column]}</td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>
