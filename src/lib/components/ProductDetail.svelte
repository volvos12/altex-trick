<script lang="ts">
    import type { ProductDetailProps } from '$lib/types';
    import Breadcrumb from './Breadcrumb.svelte';
    import ProductTitle from './ProductTitle.svelte';
    import RatingDisplay from './RatingDisplay.svelte';
    import PriceDisplay from './PriceDisplay.svelte';
    import AddToCartButton from './AddToCartButton.svelte';
    import StoreAvailability from './StoreAvailability.svelte';
    import BenefitsSection from './BenefitsSection.svelte';
    import ProductGallery from './ProductGalery.svelte';

    export let price;

    export let product: ProductDetailProps;

    function handleAddToCart() {
        // Implementation would go here
        console.log('Product added to cart:', product.title);
    }
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
</svelte:head>

<article class="font-['IBM_Plex_Sans'] px-[10vw]">
    <Breadcrumb items={product.breadcrumbs} productCode={product.productCode} />
    <ProductTitle title={product.title} />
    <RatingDisplay rating=4,68 reviewCount=12 />

    <div class="flex gap-10 max-md:flex-col">
        <ProductGallery
                imageUrl={product.mainImageUrl}
                imageAlt={product.mainImageAlt}
                currentIndex={product.currentImageIndex}
                totalImages={product.totalImages}
        />

        <div class="flex-1 max-md:w-full">
            <PriceDisplay currentPrice="{price}"/>
            <AddToCartButton onClick={handleAddToCart} />
            <StoreAvailability storeInfo={product.storeAvailability} />
            <BenefitsSection benefits={product.benefits} />
        </div>
    </div>
</article>