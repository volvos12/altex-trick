<script lang="ts">
    import type { BenefitItem } from '$lib/types';
    import BenefitItemComponent from './BenefitItem.svelte';

    export let benefits: BenefitItem[] = [];
</script>

<section class="mt-8">
    <h2 class="mb-4 text-xl">Beneficii</h2>
    {#each benefits as benefit}
        <BenefitItemComponent {benefit} />
    {/each}
</section>