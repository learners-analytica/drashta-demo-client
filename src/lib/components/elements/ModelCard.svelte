<script lang="ts">
	import type { TDataSeriesMinimal, TModelMetadata } from '@learners-analytica/drashta-types-ts';
	import IconColoredTag from '../containers/IconColoredTag.svelte';
	export let modelMetadata: TModelMetadata = JSON.parse(JSON.stringify({}));
	export let callback: (arg: string) => void;
</script>

<button on:click={() => callback(modelMetadata.id)}>
	<div>
		{console.log(modelMetadata)}
		<div class="model-header">
			<span>
				<h1>{modelMetadata.name}</h1>
				<img class={modelMetadata.estimator} alt={modelMetadata.estimator} />
			</span>
		</div>
		<div class="model-targets-holder">
			{#each modelMetadata.target as targets}
				<IconColoredTag
					content={targets.column_name}
					bgcolor="#36A2EB"
					color="#fff"
					iconCode={targets.column_type}
				></IconColoredTag>
			{/each}
		</div>
		{#each modelMetadata.columns as feature}
			<IconColoredTag
				content={feature.column_name}
				bgcolor="#36A2EB"
				color="#fff"
				iconCode={feature.column_type}
			></IconColoredTag>
		{/each}
	</div>
</button>
