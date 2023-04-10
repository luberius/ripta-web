<script lang="ts">
	import { ChevronLeft, Icon } from 'svelte-hero-icons';
	import MagicTextStatic from './magic-text-static.svelte';
	import { goto } from '$app/navigation';

	export let canGoBack: boolean;

	const goBack = () => {
		const previousUrl = document.referrer;
		const currentUrl = window.location.href;

		if (
			!previousUrl ||
			(new URL(previousUrl).host === window.location.host && previousUrl === currentUrl)
		) {
			goto('/');
		} else {
			window.history.go(-1);
		}
	};
</script>

<div class="pb-px bg-gradient sticky top-0 left-0 z-50">
	<div class="flex relative bg-slate-950 px-2 min-h-[54px] items-center">
		{#if canGoBack}
			<button on:click={goBack} class="nostyle active:bg-slate-800 z-10">
				<Icon src={ChevronLeft} class="w-8 h-8 p-1 cursor-pointer rounded-lg" />
			</button>
		{/if}
		<div class="flex center w-full absolute top-0 left-0">
			<MagicTextStatic class="text-2xl leading-[50px] cursor-pointer select-none"
				>Ripta</MagicTextStatic
			>
		</div>
	</div>
</div>

<style>
	.bg-gradient {
		background: linear-gradient(
			90deg,
			rgb(120, 238, 203) 0%,
			rgba(81, 169, 214, 1) 14%,
			rgb(161, 125, 222) 30%,
			rgb(240, 132, 192) 50%,
			rgba(135, 79, 231, 1) 70%,
			rgba(81, 169, 214, 1) 86%,
			rgba(120, 238, 203) 100%
		);
		background-size: 200%;
	}
</style>
