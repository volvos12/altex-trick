<script lang="ts">
    export let links: string[] = [];
</script>

<nav class="flex justify-center w-full h-10 bg-amber-300 bg-opacity-90">
    <ul class="flex gap-8 items-center px-0 py-2 max-w-[1240px] size-full max-md:gap-6 max-md:px-4 max-md:py-2 max-sm:overflow-x-auto max-sm:gap-4 max-sm:px-3 max-sm:py-2 max-sm:whitespace-nowrap">
        {#each links as link}
            <li class="text-base text-black cursor-pointer max-sm:text-sm">{link}</li>
        {/each}
    </ul>
</nav>