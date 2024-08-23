<script lang="ts">
    export let image: string;
    export let name: string;
    export let year: number;
    export let duration: number;

    // Function to convert seconds into hours and minutes
    function formatDuration(durationInSeconds: number): string {
        console.log(durationInSeconds);
        const hours = Math.floor(durationInSeconds / 3600);
        const minutes = Math.floor((durationInSeconds % 3600) / 60);
        return `${hours}h ${minutes}m`;
    }
</script>

<a class="w-full h-full max-w-[192px] max-h-[370px] card bg-initial card-hover overflow-hidden snap-center shrink-0" href="/movies/1234">
    <header class="relative">
        <img
            src="{image}"
            class="w-full h-full object-cover"
            alt="{name}"
        />
        <!-- Length overlay -->
        <div class="absolute bottom-0 right-0 bg-black bg-opacity-70 text-white text-xs px-2 py-1">
            {formatDuration(duration)}
        </div>
    </header>
    <div class="p-3 flex flex-col justify-left">
        <!-- Large title -->
        <h2 class="text-lg font-semibold truncate overflow-hidden whitespace-nowrap">
            {name}
        </h2>
        <!-- Small grey information -->
        <span class="text-xs text-gray-500">{year}</span>
    </div>
</a>

<style>
    .truncate {
        text-overflow: ellipsis;
    }
</style>
