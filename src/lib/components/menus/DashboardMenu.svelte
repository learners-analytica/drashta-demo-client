<script lang="ts">
	import { onMount } from 'svelte';
	import type { TDashboardEntry } from '$lib/types/user/dashboard';
	import { setCurrentDashboardIndex, dashboard,currentDashboardIndex } from '$lib/scripts/client/stores';
	import { extractDashboardEntryList } from '$lib/scripts/client/dashboard';
	function getDashboardEntryList():TDashboardEntry[]{
		console.log($currentDashboardIndex)
		if ($dashboard){
			return extractDashboardEntryList($dashboard);	
		}
		return []
	}

	function switchDashboardUsingIndex(index:number):void{
		console.log($currentDashboardIndex)
		setCurrentDashboardIndex(index)
		location.reload()
	}

	let dashBoardEntries:TDashboardEntry[]
	$: dashBoardEntries = getDashboardEntryList();
</script>
<div class="h-screen w-50 shadow-sm flex justify-center items-center">
{#each dashBoardEntries as dashboardEntry}
	 <button on:click={() => switchDashboardUsingIndex(dashboardEntry.index)} class="shadow-sm p-1 w-screen h-10 p-3 m-2 rounded-sm" >{dashboardEntry.name}</button>
{/each}
</div>
