<script lang="ts">
    import type { StoreAvailability } from '$lib/types';

    export let storeInfo: StoreAvailability;
</script>

<section class="p-5 mt-8 bg-green-50">
    <p class="mb-4 text-sm">
        {#each storeInfo.text as line, i}
            {line}{#if i < storeInfo.text.length - 1}<br />{/if}
        {/each}
    </p>
    <button class="h-9 text-xs bg-white rounded-lg border-2 border-amber-300 border-solid cursor-pointer w-[177px]">
        {storeInfo.buttonText}
    </button>
</section>