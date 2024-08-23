<script lang="ts">
	import { onMount } from 'svelte';
    import VideoCard from './PosterCard.svelte';

	export let movies:[] = [];
	let carousel: HTMLDivElement | null = null;
	let nextBtn: HTMLButtonElement | null = null;
	let prevBtn: HTMLButtonElement | null = null;

	// Function to calculate the width of an item and scroll by that amount
	const scrollToNextItem = (direction: 'next' | 'prev') => {
		if (carousel) {
			const item = carousel.querySelector('.card');
			if (item) {
				const itemWidth = item.offsetWidth;
				carousel.scrollBy({
					left: direction === 'next' ? itemWidth : -itemWidth,
					behavior: 'smooth',
				});
			}
		}
	};

	onMount(() => {
		if (nextBtn && prevBtn) {
			nextBtn.addEventListener('click', () => scrollToNextItem('next'));
			prevBtn.addEventListener('click', () => scrollToNextItem('prev'));
		}

		// Cleanup event listeners on unmount
		return () => {
			if (nextBtn && prevBtn) {
				nextBtn.removeEventListener('click', () => scrollToNextItem('next'));
				prevBtn.removeEventListener('click', () => scrollToNextItem('prev'));
			}
		};
	});
</script>

<div class="relative w-full space-y-4">
	<!-- Pager Controls (Moved Above Carousel) -->
	<div class="flex justify-end space-x-2">
		<button bind:this={prevBtn} class="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md">
			&lt;
		</button>
		<button bind:this={nextBtn} class="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md">
			&gt;
		</button>
	</div>

	<!-- Carousel Container -->
	<div bind:this={carousel} class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4">
		<!-- Carousel Items -->
		{#each movies as movie}
        	<VideoCard movieId={movie.id} image={movie.image} name={movie.name} year={movie.year} length={movie.length}/>
		{/each}
	</div>
</div>
