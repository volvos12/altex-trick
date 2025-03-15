<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import Heading from "$lib/components/heading.svelte";
    import NavHeadin from "$lib/components/NavHeadin.svelte";
    import CookieBannerExport from "$lib/components/CookieBannerExport.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import VisitorPurchases from "$lib/components/VisitorPurchases.svelte";
    import SimilarProducts from "$lib/components/SimilarProducts.svelte";
    import ProductDetailExtract from "$lib/components/ProductDetailExtract.svelte";
    import StarRating from "$lib/components/StarRating.svelte";
    import {page} from "$app/state";

    let price = $state(Number(page.params.price));

    let scrollPercent = writable(0);
    let wrapper:any;

    onMount(() => {
        if (wrapper) {
            const updateScroll = () => {
                const scrollTop = wrapper.scrollTop;
                const scrollHeight = wrapper.scrollHeight;
                const clientHeight = wrapper.clientHeight;

                const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
                scrollPercent.set(percent);
            };

            wrapper.addEventListener("scroll", updateScroll);

            return () => {
                wrapper.removeEventListener("scroll", updateScroll);
            };
        }
    });
</script>

<div bind:this={wrapper} class="page-wrapper h-screen overflow-y-auto">
    <NavHeadin />

    {#if $scrollPercent >= 20}
            <Heading price={price}/>
    {/if}

    <ProductDetailExtract price={price} />
    <CookieBannerExport />
    <div class=" py-[5vh] cursor-pointer border-t border-b rounded-none justify-between border-t-gray-400 border-b-gray-400 flex gap-5  mx-[10vw] mt-4 " >
        <div class="text-3xl font-sans">Descriere</div>
        <div>
            <svg class="fill-current inline-block" width="16px" height="16px" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M9.68 1.853a1.067 1.067 0 0 0 0-1.523 1.1 1.1 0 0 0-1.54 0L5.032 3.386 1.9.317a1.123 1.123 0 0 0-1.563 0l-.013.01a1.06 1.06 0 0 0 0 1.526l3.928 3.832c.43.422 1.13.42 1.558-.005l3.87-3.827z">

            </path>
            </svg>
        </div>
    </div>
    <div class="mx-[10vw] py-[5vh] rounded-none border-b flex justify-between gap-5 border-b-gray-400 cursor-pointer  " >
        <div class="text-3xl font-sans">Specificatii</div>
        <svg class="fill-current inline-block" width="16px" height="16px" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M9.68 1.853a1.067 1.067 0 0 0 0-1.523 1.1 1.1 0 0 0-1.54 0L5.032 3.386 1.9.317a1.123 1.123 0 0 0-1.563 0l-.013.01a1.06 1.06 0 0 0 0 1.526l3.928 3.832c.43.422 1.13.42 1.558-.005l3.87-3.827z"></path></svg>
    </div>
    <div class="mx-[10vw] py-[5vh] rounded-none border-b flex justify-between items-center gap-5  border-b-gray-400 cursor-pointer " >
        <div class="flex items-center gap-2">
            <div class="text-3xl font-sans">Recenzii</div>
            <StarRating />
            <div class="text-2xl font-semibold  ">4.68</div>
            <div class="bg-[#FFC348F2]  w-8 h-6 rounded-lg items-center text-center justify-between">22</div>
        </div>
        <svg class="fill-current inline-block" width="16px" height="16px" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M9.68 1.853a1.067 1.067 0 0 0 0-1.523 1.1 1.1 0 0 0-1.54 0L5.032 3.386 1.9.317a1.123 1.123 0 0 0-1.563 0l-.013.01a1.06 1.06 0 0 0 0 1.526l3.928 3.832c.43.422 1.13.42 1.558-.005l3.87-3.827z"></path></svg>
    </div>
    <div class="mx-[10vw] py-[5vh] flex border-b justify-between gap-5 rounded-none border-b-gray-400 cursor-pointer " >
        <div class="flex gap-3">
            <div class="text-3xl font-sans">Intrebari</div>
            <div class="bg-[#FFC348F2] mt-[1vh] w-6 h-6 rounded-lg items-center text-center justify-between">3</div>
        </div>

        <svg class="fill-current inline-block" width="16px" height="16px" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M9.68 1.853a1.067 1.067 0 0 0 0-1.523 1.1 1.1 0 0 0-1.54 0L5.032 3.386 1.9.317a1.123 1.123 0 0 0-1.563 0l-.013.01a1.06 1.06 0 0 0 0 1.526l3.928 3.832c.43.422 1.13.42 1.558-.005l3.87-3.827z"></path></svg>

    </div>

    <SimilarProducts />
    <VisitorPurchases />
    <Footer />
</div>
