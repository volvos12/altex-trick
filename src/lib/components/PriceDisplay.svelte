<script lang="ts">
    let oldPrice= 1655.93;
    export let currentPrice:number;
    let discountPercentage = Math.ceil((1 - (currentPrice / oldPrice))*100);
    export let currency: string = "lei";
</script>

<div class="flex flex-col max-sm:mt-3">
    <div class="flex gap-2 items-center">
        <span class="text-lg font-mono text-black line-through">1655,93</span>
        <span class="px-1 py-[0.5px] text-[0.8rem] rounded-tr-lg rounded-bl-lg font-semibold text-black bg-amber-300 rounded-none">-{discountPercentage}%</span>
    </div>
    <div class="flex gap-1 items-center text-4xl font-bold text-rose-700">
        <span>{currentPrice}</span>
        <div>
            <div class="relative w-[5vw] h-full">
                <span class="text-2xl font-bold text-rose-700 top-0 absolute left-0">,91</span>
            </div>
            <span class="text-3xl font-bold ml-[2.5rem] text-rose-700">{currency}</span>
        </div>
    </div>
</div>
