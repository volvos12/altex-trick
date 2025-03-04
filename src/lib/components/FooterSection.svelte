<script lang="ts">
    export let title: string;
    export let links: string[];
</script>

<div class="mr-10 max-md:mr-5 max-md:min-w-[200px]">
    <h3 class="mb-3.5 text-lg font-bold tracking-tight leading-6 text-neutral-500">{title}</h3>
    <div class="mb-3 w-5 h-px bg-amber-300"></div>
    <nav class="flex flex-col">
        {#each links as link}
            <a href="#" class="text-sm leading-6 text-white">{link}</a>
        {/each}
    </nav>
</div>