<script lang="ts">
	import { Icon, Plus } from 'svelte-hero-icons';
	import { page } from '$app/stores';
	import Navbar from '$components/navbar.svelte';
	import { isCanGoBack } from '$utils/navigation';
	import { fade, fly } from 'svelte/transition';

	export let data: { pathname: string };
	let canGoBack = false;

	$: {
		let { id } = $page.route;
		canGoBack = isCanGoBack(id);
	}
</script>

<div class="flex flex-col">
	<Navbar {canGoBack} />
	{#key data.pathname}
		<div in:fly={{ x: 150, duration: 200, delay: 150 }} out:fly={{ x: -50, duration: 150 }}>
			<slot />
		</div>
	{/key}

	<a href="/note/new" class="fixed bottom-12 right-6 rounded-full">
		<button class="flex gap-2 center ">
			<Icon src={Plus} class="h-6 w-6" />
			New Note
		</button>
	</a>
</div>
