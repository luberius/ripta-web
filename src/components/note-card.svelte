<script lang="ts">
	export let id: string;
</script>

<a
	class="relative max-w-sm bg-zinc-800 p-4 cursor-pointer rounded-lg h-[207px] md:h-[400px] select-none"
	href="/note/{id}"
>
	<p class="font-semibold mb-3">Title</p>
	<p class="text-gray-400 text-sm">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi possimus cum saepe nam veniam
	</p>
</a>

<style>
	a {
		background: linear-gradient(
				52deg,
				rgb(28, 28, 30) 0%,
				rgba(28, 28, 30, 1) 50%,
				rgba(39, 39, 42, 1)
			)
			var(--x, 0) / 200%;
	}

	a:hover {
		--x: 100%;
	}

	a:hover::before {
		opacity: 0.7;
	}

	a::before {
		content: '';
		z-index: -1;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: linear-gradient(
			45deg,
			rgb(120, 238, 203) 0%,
			rgba(81, 169, 214, 1) 30%,
			rgb(161, 125, 222) 60%,
			rgb(240, 132, 192) 100%
		);
		transform: translate3d(0px, 0px, 0) scale(0.95);
		filter: blur(50px);
		opacity: 0;
		transition: opacity 0.3s;
		border-radius: inherit;
	}

	a::after {
		content: '';
		z-index: -1;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: inherit;
		border-radius: inherit;
	}

	a:active {
		transform: scale(0.98);
	}
</style>
