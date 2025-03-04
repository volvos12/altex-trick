<script lang="ts">
    import ProductDetail from './ProductDetail.svelte';
    import type { ProductDetailProps } from '$lib/types';
    import photo from "$lib/assets/front-important.jpg"
    import BuyBack from "$lib/assets/BuyBack.avif"

    export let price:number;

    // Sample data for demonstration
    const productData: ProductDetailProps = {
        productCode: "MSFF4WV3S8AIDD",
        title: "Masina de spalat rufe frontala LG F4WV3S8AIDD, 8kg, 1400rpm, Clasa B, alb",
        breadcrumbs: [
            { label: "Electrocasnice mari", link: "#" },
            { label: "Masini de spalat rufe", link: "#" },
            { label: "Masini de spalat rufe frontale", link: "#" }
        ],
        rating: {
            value: 4.68,
            maxValue: 5,
            reviewCount: 22,
            reviewText: "recenzii"
        },
        price: {
            originalPrice: 1655,
            currentPrice: 1490,
            discountPercentage: 10,
            currency: "lei",
            stockInfo: "in anumite magazine"
        },
        storeAvailability: {
            text: [
                "Verifica stocul din magazin, pentru",
                "ridicare imediata, gratuit."
            ],
            buttonText: "Selecteaza magazinul"
        },
        benefits: [
            {
                iconUrl: BuyBack,
                iconAlt: "BYB Voucher",
                text: "BYB Voucher 150 lei"
            }
        ],
        mainImageUrl: photo,
        mainImageAlt: "LG Washing Machine",
        totalImages: 12,
        currentImageIndex: 1
    };
</script>

<ProductDetail product={productData} price="{price}" />