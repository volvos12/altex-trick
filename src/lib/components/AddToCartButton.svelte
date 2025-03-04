<script lang="ts">
    export let onClick: () => void = () => {};
</script>

<button
        class="text-base text-white bg-rose-700 rounded-lg cursor-pointer border-[none] h-[45px] w-[241px] max-sm:w-full"
        on:click={onClick}
>
    Adauga in cos
</button>