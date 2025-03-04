<script lang="ts">
    import CartIcon from './CartIcon.svelte';

    function handleAddToCart() {
        // Add to cart functionality would go here
        console.log('Add to cart clicked');
    }
</script>

<button
        class="flex justify-center items-center bg-rose-700 rounded-none h-[45px] w-[60px]"
        aria-label="Add to cart"
        on:click={handleAddToCart}
>
    <CartIcon />
</button>