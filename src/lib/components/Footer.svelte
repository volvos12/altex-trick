<script lang="ts">
    import TopBanner from './TopBanner.svelte';
    import FooterContent from './FooterContent.svelte';
    import BottomBanner from './BottomBanner.svelte';
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap" rel="stylesheet" />
</svelte:head>

<footer class="bg-zinc-900">
    <TopBanner />
    <FooterContent />
    <BottomBanner />
</footer>
