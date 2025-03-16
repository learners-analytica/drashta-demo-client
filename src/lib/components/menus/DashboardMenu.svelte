<script lang="ts">
	import { onMount } from 'svelte';
	import type { TDashboardEntry } from '$lib/types/user/dashboard';
	import { setCurrentDashboardIndex, dashboard } from '$lib/scripts/client/stores';
	import { extractDashboardEntryList } from '$lib/scripts/client/dashboard';
	function getDashboardEntryList():TDashboardEntry[]{
		if ($dashboard){
			return extractDashboardEntryList($dashboard);	
		}
		return []
	}

	function switchDashboardUsingIndex(index:number):void{
		setCurrentDashboardIndex(index)
	}

	let dashBoardEntries:TDashboardEntry[]
	$: dashBoardEntries = getDashboardEntryList();
</script>
{#each dashBoardEntries as dashboardEntry}
	 <button on:click={() => switchDashboardUsingIndex(dashboardEntry.index)}>{dashboardEntry.name}</button>
{/each}
