<script lang="ts">
    // Award badges and download badges images
    const awardBadges = [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4f38cccff4617cc46c6d19d713049bcd6e01bd5", alt: "Award badge" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f809ff6618dc4e983ad2ed7916baa3b8440a2fea", alt: "Award badge" }
    ];

    const downloadBadges = [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/21e3ed3833ed4e6bfb19038297b696e5585c871b", alt: "Download badge" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a68db1e1f71bca8ace0da171d7bee1b4e8b3c69", alt: "Download badge" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/52ab430a46986432e96e279b4f508eba10d30a87", alt: "Download badge" }
    ];
</script>

<section class="px-20 py-3.5 bg-black max-sm:px-5 max-sm:py-3.5">
    <div class="flex justify-between items-center mx-auto my-0 max-w-[1270px] max-md:flex-wrap max-md:gap-5 max-sm:flex-col max-sm:items-start">
        <div class="flex gap-2 items-center max-sm:mb-5">
            {#each awardBadges as badge}
                <img src={badge.src} alt={badge.alt} class="rounded-full h-[60px] w-[60px]" />
            {/each}
            <div class="ml-2">
                <h3 class="mb-1 text-base font-bold tracking-tight leading-5 text-amber-300">Cel mai bun raport pret-calitate</h3>
                <p class="text-sm tracking-tight leading-5 text-white">Conform sondajului Best Buy Award 2023/2024 efectuat de organizatia iCertias.</p>
            </div>
        </div>
        <div class="flex gap-2 max-md:mt-5 max-sm:flex-wrap">
            {#each downloadBadges as badge}
                <img src={badge.src} alt={badge.alt} class="h-11" />
            {/each}
        </div>
    </div>
</section>
