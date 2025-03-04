<script lang="ts">
    // Certification badges
    const certBadges = [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0611e811bee6345f67205ec15f68fc7db8dddde8", alt: "Certification badge" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d7b2e8fc5c96e0766b35efb977cf0e67d92937d", alt: "Certification badge" }
    ];
</script>

<section class="px-20 py-5 bg-zinc-800 max-sm:px-5 max-sm:py-3.5">
    <div class="flex flex-col gap-2 mx-auto my-0 max-w-[1270px]">
        <p class="text-xs tracking-tight leading-5 text-neutral-400">
            Cel mai mic pret din Romania! Daca gasesti in alta parte mai ieftin primesti
            <span class="underline">de doua ori diferenta</span>.
        </p>

        <p class="text-xs tracking-tight leading-5 text-neutral-400">
            S.C. ALTEX ROMANIA S.R.L. este inregistrata cu numarul 600 / 2006 in registrul de evidenta a prelucrarilor de date cu caracter personal
        </p>

        <div class="flex gap-2 max-sm:flex-col">
            {#each certBadges as badge}
                <img src={badge.src} alt={badge.alt} class="h-[37px]" />
            {/each}
        </div>
    </div>
</section>