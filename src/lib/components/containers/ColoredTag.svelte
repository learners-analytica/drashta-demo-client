<script lang="ts">
    export let content:string;
    export let bgcolor:string;
    export let color:string;
</script>

<div style="background-color: {bgcolor}; color: {color}" class="flex flex-row-reverse justify-between p-2  rounded-2xl m-1">
    <span >{content}</span>
    <slot />
</div>
