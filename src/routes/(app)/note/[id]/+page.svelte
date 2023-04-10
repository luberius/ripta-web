<script lang="ts">
	import { page } from '$app/stores';

	let { id } = $page.params;
</script>

<div class="flex p-6 w-full">{id}</div>
