<script lang="ts">
	import Slider from "$lib/components/Movie/Slider.svelte";
	import movies from "$lib/data/Movies";

	console.log(movies);
</script>

<Slider movies={movies}/>
