<script lang="ts">
    import { onMount } from 'svelte';
    import { Chart } from 'chart.js/auto';

    let ctx: Chart | null = null;

    onMount(() => {
        const canvas = document.getElementById('myChart') as HTMLCanvasElement;
        if (canvas) {
            ctx = new Chart(canvas, {
                type: 'line',
                data: {
                    labels: [1, 2, 3, 4, 5],
                    datasets: [{
                        label: 'My First dataset',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [0, 10, 5, 2, 20],
                    }]
                },
                options: {}
            });
        }
    });
</script>
<div>
<canvas id="myChart"></canvas>
</div>