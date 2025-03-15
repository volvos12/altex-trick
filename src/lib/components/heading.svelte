<script lang="ts">
    import RatingDisplay from './RatingDisplay.svelte';
    import PriceDisplay from './PriceDisplay.svelte';
    import CartButton from './CartButton.svelte';
    import NavigationBar from './NavigationBar.svelte';
    import Productinfo from './Productinfo.svelte';
    export let price:number;
</script>

<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap" rel="stylesheet" />

<section class="animation w-full bg-white fixed top-0 z-[100] hidden lg:block">
    <header class="flex justify-center px-5 py-2.5 h-20">
        <div class="flex relative justify-between items-center w-full max-w-screen-xl max-md:px-4 max-md:py-0">
            <Productinfo
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/4d5aa92e2e38e0f35b1e55c0e06f509bd4d47185"
                    imageAlt="LG Washing Machine"
                    title="Masina de spalat rufe frontala LG"
                    subtitle="F4WV3S8AIDD, 8kg, 1400rpm, Clasa B, alb"
            />

            <RatingDisplay
                    rating={4.68}
                    reviewCount={22}
            />

            <PriceDisplay
                    currentPrice="{price}"
                    currency="lei"
            />

            <CartButton />
        </div>
    </header>

    <NavigationBar
            links={[
      "Resigilate",
      "Descriere",
      "Specificatii",
      "Recenzii",
      "Intrebari"
    ]}
    />
</section>
<style>
    @keyframes slideDown {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
        }
    }

    .animation {
        animation: slideDown 0.5s ease-out forwards;
    }
</style>
