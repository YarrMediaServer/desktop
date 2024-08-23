<script lang="ts">
    export let image: string;
    export let name: string;
    export let year: number;
    export let length: number;
</script>

<a class="w-full h-full max-w-[192px] max-h-[370px] card bg-initial card-hover overflow-hidden snap-center shrink-0" href="/movies/1234">
    <header>
        <img
            src="{image}"
            class="w-full h-full object-cover"
            alt="{name}"
        />
    </header>
    <div class="p-3 flex flex-col justify-left">
        <!-- Large title -->
        <h2 class="text-lg font-semibold truncate overflow-hidden whitespace-nowrap">
            {name}
        </h2>
        <!-- Small grey information -->
        <span class="text-xs text-gray-500">{year}</span>
        <span class="text-xs text-gray-500">
            <a href="#">S01</a> - <a href="#">E01</a>
        </span>
    </div>
</a>

<style>
    .truncate {
        text-overflow: ellipsis;
    }
</style>
