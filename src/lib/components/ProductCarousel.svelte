<script lang="ts">
    import ProductCard from './ProductCard.svelte';
    const ArrowIcon = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon">
    <g clip-path="url(#clip0_1_592)">
        <path d="M9.30579 3.48369C9.39687 3.39429 9.46922 3.28764 9.5186 3.16997C9.56799 3.05229 9.59343 2.92596 9.59343 2.79834C9.59343 2.67072 9.56799 2.54438 9.5186 2.42671C9.46922 2.30903 9.39687 2.20238 9.30579 2.11299C9.12073 1.93159 8.87193 1.82999 8.61279 1.82999C8.35365 1.82999 8.10485 1.93159 7.91979 2.11299L5.12259 4.86339L2.30379 2.10129C2.11524 1.91858 1.86299 1.81641 1.60044 1.81641C1.33789 1.81641 1.08564 1.91858 0.89709 2.10129L0.88539 2.11029C0.793115 2.19927 0.719722 2.30595 0.669593 2.42393C0.619464 2.54192 0.593628 2.66879 0.593628 2.79699C0.593628 2.92518 0.619464 3.05206 0.669593 3.17004C0.719722 3.28803 0.793115 3.3947 0.88539 3.48369L4.42059 6.93249C4.80759 7.31229 5.43759 7.31049 5.82279 6.92799L9.30579 3.48369Z" fill="#C00033"></path>
    </g>
    <defs>
        <clipPath id="clip0_1_592">
            <rect width="9" height="9" fill="white" transform="translate(0.59375 0.015625)"></rect>
        </clipPath>
    </defs>
</svg>`

    import product1 from "$lib/assets/product-similar-1.jpg";
    import product2 from "$lib/assets/product-similar-2.jpg";
    import product3 from "$lib/assets/product-similar-3.jpg";
    import product4 from "$lib/assets/product-similar-4.jpg";
    import product5 from "$lib/assets/product-similar-5.jpg";

    // Define product interface
    interface Product {
        id: number;
        name: string;
        imageUrl: string;
        imageAlt: string;
        price: number;
        rating: number;
        reviewCount: number;
    }

    // Sample product data
    const products: Product[] = [
        {
            id: 1,
            name: "Masina de spalat rufe frontala slim GORENJE WNHPI62SCS, SteamTech, 6 kg, 1200rpm, Clasa C, alb",
            imageUrl: product1,
            imageAlt: "Washing Machine",
            price: 1599,
            rating: 5,
            reviewCount: 32
        },
        {
            id: 2,
            name: "Masina de spalat rufe frontala VORTEX VMA914D02S, 9 kg, 1400rpm, Clasa A, alb",
            imageUrl: product2,
            imageAlt: "Washing Machine",
            price: 1549,
            rating: 5,
            reviewCount: 6
        },
        {
            id: 3,
            name: "Masina de spalat rufe frontala slim SAMSUNG WW60A3120BE/LE, 6 kg, 1200rpm, Clasa C, alb",
            imageUrl: product3,
            imageAlt: "Washing Machine",
            price: 1549,
            rating: 5.00,
            reviewCount: 3
        },
        {
            id: 4,
            name: "Masina de spalat rufe frontala slim WHIRLPOOL WRSB 7259 BB EU, 7 kg, 1200rpm, Clasa B, alb",
            imageUrl: product4,
            imageAlt: "Washing Machine",
            price: 1529,
            rating: 5,
            reviewCount: 50
        },
        {
            id: 5,
            name: "Masina de spalat rufe frontala ARCTIC APLM1WFSU18410W, Extra Steam, 8 kg, 1400rpm, Clasa A, alb",
            imageUrl: product5,
            imageAlt: "Washing Machine",
            price: 1599,
            rating: 4.80,
            reviewCount: 12
        }
    ];
</script>


<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap" rel="stylesheet" />

<section class="px-0 py-4 mx-auto my-0 max-w-[1240px] mb-[3vh]">
    <!-- Title -->
    <h2 class="mb-2 text-3xl leading-10 max-sm:text-2xl max-sm:leading-8">Alti vizitatori au cumparat</h2>

    <!-- Title underline -->
    <div class="mb-4 w-5 h-px bg-amber-300"></div>

    <!-- Products grid -->
    <div class="grid gap-5 mb-6 grid-cols-[repeat(5,1fr)] max-md:grid-cols-[repeat(3,1fr)] max-sm:grid-cols-[1fr]">
        {#each products as product (product.id)}
            <ProductCard
                    name={product.name}
                    imageUrl={product.imageUrl}
                    imageAlt={product.imageAlt}
                    price={product.price}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
            />
        {/each}
    </div>

    <!-- View all products link -->
    <button class="flex gap-2 justify-center items-center text-sm font-medium text-rose-700 cursor-pointer mx-auto">
        <span>Vezi toate produsele</span>
        <div>
            {@html ArrowIcon}
        </div>
    </button>
</section>