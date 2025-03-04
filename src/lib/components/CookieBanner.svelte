<script lang="ts">
    import CloseIcon from './CloseIcon.svelte';
    import ArrowIcon from './ArrowIcon.svelte';

    // Props with default values
    export let onAccept: () => void = () => {};
    export let onCustomize: () => void = () => {};
    export let onClose: () => void = () => {};
    export let onSettingsClick: () => void = () => {};
    export let onPolicyClick: () => void = () => {};

    // State management
    let visible = true;

    function handleClose() {
        visible = false;
        onClose();
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
</svelte:head>

{#if visible}
    <section class="p-6 w-full bg-white rounded-lg shadow-2xl max-w-[1440px] max-sm:p-4">
        <div class="flex relative gap-6 justify-between max-md:flex-col max-sm:gap-4">
            <button
                    class="absolute top-0 right-0 cursor-pointer"
                    on:click={handleClose}
                    aria-label="Close cookie banner"
            >
                <CloseIcon />
            </button>

            <div class="max-w-[1033px]">
                <h2 class="mb-2 text-sm font-semibold tracking-wide leading-6 text-neutral-900 max-sm:text-sm">
                    Acest site utilizează cookie-uri
                </h2>

                <div class="text-sm tracking-wide leading-6 text-neutral-900 max-sm:text-sm">
                    <p class="mb-1">
                        Folosim cookie-uri pentru a personaliza continutul si anunturile, pentru a oferi functii de retele sociale si pentru a analiza traficul. De
                    </p>
                    <p class="mb-1">
                        asemenea, le oferim partenerilor de retele sociale, de publicitate si de analize informatii cu privire la modul in care folositi site-ul nostru.
                    </p>
                    <p class="mb-1">
                        <span>Detalii gasesti in</span>
                        <button
                                class="text-base font-bold text-yellow-400 cursor-pointer"
                                on:click={onPolicyClick}
                        >
                            politica de cookie-uri
                        </button>
                        <span>.</span>
                    </p>
                </div>

                <button
                        class="flex gap-2 items-center mt-4 text-sm font-semibold tracking-normal leading-6 text-yellow-400 cursor-pointer max-sm:text-sm"
                        on:click={onSettingsClick}
                >
                    <span>Setari cookie-uri</span>
                    <ArrowIcon />
                </button>
            </div>

            <div class="flex flex-col gap-2 min-w-[286px] max-md:flex-row max-md:w-full max-sm:flex-col mt-[3vh]">
                <button
                        class="p-3 w-full text-sm font-semibold leading-6 text-black bg-yellow-400 rounded border-2 border-yellow-400 border-solid cursor-pointer max-md:flex-1"
                        on:click={onAccept}
                >
                    Acceptati tot
                </button>

                <button
                        class="flex gap-2 justify-center items-center p-3 w-full text-sm font-semibold leading-6 bg-yellow-400 rounded border-2 border-yellow-400 border-solid cursor-pointer text-neutral-900 max-md:flex-1"
                        on:click={onCustomize}
                >
                    <span>Personalizează</span>
                    <ArrowIcon />
                </button>
            </div>
        </div>
    </section>
{/if}