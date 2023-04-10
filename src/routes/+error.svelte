<script>
	import '../app.css';
	import { page } from '$app/stores';
</script>

<div class="flex items-center justify-center h-screen">
	<div>
		<div class="flex flex-col items-center gap-4">
			<h1 class="font-bold text-3xl lg:text-6xl">{$page.status}</h1>

			<h6 class="mb-2 text-lg font-bold text-center md:text-3xl">
				Page {$page.error?.message}
			</h6>

			<a href="/">
				<button> Go Home </button>
			</a>
		</div>
	</div>
</div>
