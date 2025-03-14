<script lang="ts">
    export let content:string;
    export let bgcolor:string;
    export let color:string;
</script>

<div style="background-color: {bgcolor}; color: {color}">
    <span >{content}</span>
    <slot />
</div>