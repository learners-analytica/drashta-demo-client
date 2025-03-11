<script lang="ts">
    import type { TModelMetadata } from "@learners-analytica/drashta-types-ts";
    import ColoredTag from "../containers/ColoredTag.svelte";
    export let modelMetadata:TModelMetadata
</script>

<div>
    <div class="model-header">
        <h1>{modelMetadata.name}</h1>
        <img class={modelMetadata.estimator} alt={modelMetadata.estimator}>
    </div>
    <div class="model-targets-holder">
        <ColoredTag content={modelMetadata.target} bgcolor="#FF6384" color="#fff"></ColoredTag>
    </div>
</div>
