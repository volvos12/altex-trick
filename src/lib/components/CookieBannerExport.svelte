<script lang="ts">
    import CookieBanner from './CookieBanner.svelte';

    function handleAccept() {
        console.log('Cookies accepted');
        // Here you would typically set a cookie or localStorage item
    }

    function handleCustomize() {
        console.log('Customize cookies clicked');
        // Here you would typically open a modal with cookie settings
    }

    function handleClose() {
        console.log('Cookie banner closed');
        // Here you would typically set a temporary dismissal cookie
    }

    function handleSettingsClick() {
        console.log('Settings clicked');
        // Here you would typically open cookie settings
    }

    function handlePolicyClick() {
        console.log('Policy clicked');
        // Here you would typically navigate to the cookie policy page
    }
</script>

<div class="p-4 flex justify-center fixed bottom-0 self-center w-full z-50">
    <CookieBanner
            onAccept={handleAccept}
            onCustomize={handleCustomize}
            onClose={handleClose}
            onSettingsClick={handleSettingsClick}
            onPolicyClick={handlePolicyClick}
    />
</div>