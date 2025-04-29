<script lang="ts">
    import ColoredTag from "./ColoredTag.svelte";
    import { iconMapDataTypes } from "$lib/scripts/utils/consts/iconMaps";
    export let content:string;
    export let iconCode:string;
    export let bgcolor:string;
    export let color:string;
</script>
<ColoredTag content={content} bgcolor={bgcolor} color={color}>
    <i class={iconCode}></i>
</ColoredTag>
