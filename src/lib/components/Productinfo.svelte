<script lang="ts">
    export let imageUrl: string;
    export let imageAlt: string;
    export let title: string;
    export let subtitle: string;
</script>

<article class="flex gap-3 items-center max-sm:flex-col max-sm:items-start">
    <img
            src={imageUrl}
            alt={imageAlt}
            class="object-contain h-[60px] w-[60px]"
    />
    <div class="flex flex-col">
        <h1 class="text-base font-medium leading-5 text-black">{title}</h1>
        <h2 class="text-base font-medium leading-5 text-black">{subtitle}</h2>
    </div>
</article>