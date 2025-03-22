<script lang="ts">
	import NavBar from '$lib/components/menus/NavMenu.svelte';
	import '../app.css';
</script>

<div class="hidden">
    <div class="bg-teal-300"></div>
    <div class="bg-red-300"></div>
    <div class="bg-yellow-300"></div>
    <div class="bg-green-300"></div>
    <div class="bg-blue-300"></div>
    <div class="bg-purple-300"></div>
    <div class="bg-orange-300"></div>
</div>



<div>
	<NavBar></NavBar>
</div>

<slot />
