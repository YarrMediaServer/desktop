<script lang="ts">
	import { onMount } from 'svelte';
    import VideoCard from './PosterCard.svelte';

	export let movies: [] = [];
	let carousel: HTMLDivElement | null = null;
	let nextBtn: HTMLButtonElement | null = null;
	let prevBtn: HTMLButtonElement | null = null;

	// Function to calculate the width of 5 items and scroll by that amount
	const scrollByItems = (direction: 'next' | 'prev', numItems: number) => {
		if (carousel) {
			const item = carousel.querySelector('.card');
			if (item) {
				const itemWidth = item.offsetWidth;
				const scrollAmount = itemWidth * numItems; // Calculate the total width to scroll

				carousel.scrollBy({
					left: direction === 'next' ? scrollAmount : -scrollAmount,
					behavior: 'smooth',
				});
			}
		}
	};

	onMount(() => {
		if (nextBtn && prevBtn) {
			nextBtn.addEventListener('click', () => scrollByItems('next', 5)); // Scroll forward by 5 items
			prevBtn.addEventListener('click', () => scrollByItems('prev', 5)); // Scroll backward by 5 items
		}

		// Cleanup event listeners on unmount
		return () => {
			if (nextBtn && prevBtn) {
				nextBtn.removeEventListener('click', () => scrollByItems('next', 5));
				prevBtn.removeEventListener('click', () => scrollByItems('prev', 5));
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
        	<VideoCard movieId={movie.id} image={movie.image} name={movie.name} year={movie.year} duration={movie.duration}/>
		{/each}
	</div>
</div>

<style>
	/* Hide scrollbar in Webkit browsers (Chrome, Safari) */
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar in Firefox */
	.scrollbar-hide {
		-ms-overflow-style: none;  /* Internet Explorer 10+ */
		scrollbar-width: none;  /* Firefox */
	}
</style>
