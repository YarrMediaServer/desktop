<script lang="ts">
    import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';
</script>


<AppRail width="w-30">
	<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>(icon) LONG TEXT</AppRailAnchor>
	<AppRailAnchor href="/about" selected={$page.url.pathname === '/about'}>(icon) LONGER TEXT</AppRailAnchor>
</AppRail>
