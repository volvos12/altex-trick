<script lang="ts">
    import type { BreadcrumbItem } from '$lib/types';

    export let items: BreadcrumbItem[] = [];
    export let productCode: string = '';
</script>

<nav class="items-center px-0 py-3.5 text-sm leading-5 hidden md:flex">
    {#each items as item, index}
        {#if !item.isActive}
            <a href={item.link} class="text-rose-700 no-underline">{item.label}</a>
            <span class="mx-1.5 my-0 text-rose-700">/</span>
        {:else}
            <span class="text-black">{item.label}</span>
        {/if}
    {/each}
    <span class="text-black">Cod produs: {productCode}</span>
</nav>
