<script>
	import MagicText from '../../../components/magic-text.svelte';
</script>

<div class="flex center w-full h-screen relative">
	<div class="flex center absolute top-40">
		<MagicText class="text-5xl leading-[100px]">Ripta.</MagicText>
	</div>
	<div class="flex flex-col w-full md:w-1/2 gap-4 px-6">
		<label for="username">Username</label>
		<input type="text" name="username" class="form-input" />
		<label for="password">Password</label>
		<input type="password" name="password" class="form-input" />
		<button class="mt-2">Login</button>
	</div>
</div>
