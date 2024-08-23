<script lang="ts">
    import { LightSwitch, AppBar } from '@skeletonlabs/skeleton';

</script>

<!-- App Bar -->
<AppBar>
    <svelte:fragment slot="lead">
        <strong class="text-xl uppercase">Yarr</strong>
    </svelte:fragment>
    <div class="flex justify-center space-x-2">
        <a class="btn" href="/">Home</a>
        <a class="btn" href="/TV">TV</a>
        <a class="btn" href="/Movies">Movies</a>
        <a class="btn" href="/Music">Music</a>
    </div>

    <svelte:fragment slot="trail">
        <LightSwitch />
    </svelte:fragment>
</AppBar>
