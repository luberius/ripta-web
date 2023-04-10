<span class={$$props.class}>
	<slot />
</span>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

	@keyframes background-pan {
		from {
			background-position: 0% center;
		}

		to {
			background-position: -200% center;
		}
	}

	span {
		font-family: 'Pacifico', cursive;
		animation: background-pan 5s linear infinite;
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
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		white-space: nowrap;
	}
</style>
