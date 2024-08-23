<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Navbar from '$lib/components/Navbar.svelte';
	import Rail from '$lib/components/Rail.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup, initializeStores, Drawer } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	initializeStores();
</script>

<!-- App Shell -->
<AppShell>
	<!-- Navbar -->
	<Navbar slot="header" />

	<!-- Left side drawer -->
	<Drawer slot="sidebarRight" />

	<!-- App Rail -->
	<!--<Rail slot="sidebarLeft"/>-->

	<!-- Main Content -->
	<div class="w-full p-4">
		<slot />
	</div>
</AppShell>
