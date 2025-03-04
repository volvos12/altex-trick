<script lang="ts">
    import IconButton from './IconButton.svelte';
    import StockStatus from './StockStatus.svelte';
    import Rating from './Rating.svelte';

    const CompareIcon = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="compare-icon">
    <g clip-path="url(#clip0_1_623)">
        <path d="M15.36 2.915H9.64V1.765C9.64 1.135 9.13 0.625 8.5 0.625H1.64C1.01 0.625 0.5 1.135 0.5 1.765V13.195C0.5 13.825 1.01 14.335 1.64 14.335H7.36V15.485C7.36 16.115 7.87 16.625 8.5 16.625H15.36C15.99 16.625 16.5 16.115 16.5 15.485V4.055C16.5 3.425 15.99 2.915 15.36 2.915ZM1.64 8.055H5.17L3.69 9.525L4.5 10.325L7.36 7.475L4.5 4.625L3.7 5.425L5.16 6.925H1.64V1.765H8.5V13.195H1.64V8.055ZM8.5 15.485V14.325C9.13 14.325 9.64 13.815 9.64 13.185V4.055H15.36V9.195H11.83L13.31 7.715L12.5 6.915L9.64 9.765L12.5 12.625L13.3 11.825L11.83 10.335H15.36V15.485H8.5Z" fill="black"></path>
    </g>
    <defs>
        <clipPath id="clip0_1_623">
            <rect width="16" height="16" fill="white" transform="translate(0.5 0.625)"></rect>
        </clipPath>
    </defs>
</svg>`

    const HeartIcon = `<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="heart-icon">
    <g clip-path="url(#clip0_1_620)">
        <path d="M12.19 1.76532C13.02 1.76532 13.83 2.09532 14.42 2.69532C15.0203 3.30032 15.3571 4.11805 15.3571 4.97032C15.3571 5.82259 15.0203 6.64032 14.42 7.24532L8.50001 13.2253L2.58001 7.24532C1.98214 6.63906 1.64695 5.8218 1.64695 4.97032C1.64695 4.11885 1.98214 3.30159 2.58001 2.69532C2.87211 2.39932 3.22009 2.16429 3.60377 2.00388C3.98744 1.84346 4.39915 1.76086 4.81501 1.76086C5.23087 1.76086 5.64258 1.84346 6.02625 2.00388C6.40993 2.16429 6.75791 2.39932 7.05001 2.69532L8.15001 3.81532C8.34001 4.01532 8.66001 4.01532 8.85001 3.81532L9.95001 2.71532C10.2393 2.41316 10.5871 2.17309 10.9722 2.00976C11.3573 1.84643 11.7717 1.76326 12.19 1.76532ZM12.19 0.625325C11.6213 0.624146 11.058 0.735787 10.5328 0.953785C10.0075 1.17178 9.53074 1.4918 9.13001 1.89532L8.50001 2.53532L7.87001 1.89532C7.0728 1.08929 5.98896 0.631586 4.85532 0.622217C3.72169 0.612848 2.63043 1.05258 1.82001 1.84532L1.76001 1.89532C0.949028 2.7153 0.494171 3.82204 0.494171 4.97532C0.494171 6.1286 0.949028 7.23535 1.76001 8.05532L8.14001 14.4953C8.34001 14.6953 8.66001 14.6953 8.86001 14.4953L15.24 8.05532C16.051 7.23535 16.5058 6.1286 16.5058 4.97532C16.5058 3.82204 16.051 2.7153 15.24 1.89532C14.8411 1.49211 14.3661 1.17219 13.8425 0.954166C13.3189 0.736143 12.7572 0.624364 12.19 0.625325Z" fill="black"></path>
    </g>
    <defs>
        <clipPath id="clip0_1_620">
            <rect width="16" height="14" fill="white" transform="translate(0.5 0.625)"></rect>
        </clipPath>
    </defs>
</svg>`;
    export let name: string;
    export let imageUrl: string;
    export let imageAlt: string;
    export let price: number;
    export let rating: number;
    export let reviewCount: number;
</script>

<article class="relative p-4 bg-white rounded border border-solid border-stone-300">
    <!-- Wishlist and Compare buttons -->
    <div class="flex absolute left-3 top-4 flex-col gap-1.5">
        <IconButton icon={HeartIcon} />
        <IconButton icon={CompareIcon} />
    </div>

    <!-- Product Image -->
    <img
            src={imageUrl}
            alt={imageAlt}
            class="object-contain mb-4 w-full h-[197px]"
    />

    <!-- Product Info -->
    <div class="px-4 py-0">
        <!-- Product Name -->
        <h3 class="mb-4 text-sm leading-5">{name}</h3>

        <!-- Stock and Rating -->
        <div class="flex gap-2 items-center mb-4">
            <StockStatus />
            <Rating rating={rating} reviewCount={reviewCount} />
        </div>

        <!-- Price -->
        <div class="mb-3">
            <div class="flex gap-1 text-2xl font-bold text-rose-700">
                <span>{price}</span>
                <span>lei</span>
            </div>
        </div>

        <!-- Add to Cart Button -->
        <button class="px-0 py-2 w-full text-sm font-medium text-white bg-rose-700 rounded-none cursor-pointer border-[none]">
            Adauga in cos
        </button>
    </div>
</article>