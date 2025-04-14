<script lang="ts">
	import type { TModelMetadata } from '@learners-analytica/drashta-types-ts';
	import { modelForPlayground } from '$lib/scripts/client/playground';
	import IconColoredTag from '../containers/IconColoredTag.svelte';
	export let modelMetadata: TModelMetadata = JSON.parse(JSON.stringify({}));
</script>

<button on:click={() => modelForPlayground(modelMetadata.id)} class="border-0 rounded-2 shadow-md m-1">
	<div>
		{console.log(modelMetadata)}
		<div class="model-header p-2">
			<span>
				<h1>{modelMetadata.name}</h1>
				<img class={modelMetadata.estimator} alt={modelMetadata.estimator} />
			</span>
		</div>
		<div class='flex flex-column'>
		<div class="">
			{#each modelMetadata.target as targets}
				<IconColoredTag
					iconCode={targets.column_type}
					content={targets.column_name}
					bgcolor="#FFA500"
					color="#fff"
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
	</div>
</button>
