<script lang="ts">
    export let text: string;
    export let icon: string = "";
    export let active: boolean = false;
</script>

<div class={`${active ? 'flex' : ''} gap-2 px-5 py-3 text-base text-white border-r border-solid cursor-pointer border-r-rose-600 max-sm:px-4 max-sm:py-3 max-sm:text-sm max-sm:whitespace-nowrap`}>
    {#if icon}
        <div class="flex items-center">
            {@html icon}
        </div>
    {/if}
    <span>{text}</span>
    <slot></slot>
</div>
