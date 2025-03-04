<script lang="ts">
    import StarRating from './StarRating.svelte';

    export let rating: number;
    export let reviewCount: number;
</script>

<div class="flex flex-col items-start max-sm:mt-3">
    <div class="relative w-24 h-[15px]">
        <StarRating />
        <div class="absolute top-0 right-0 w-1.5 bg-white mix-blend-color h-[15px]"></div>
    </div>
    <p class="mt-px text-base text-rose-700">
        {rating} din 5 ({reviewCount} recenzii)
    </p>
</div>