<template>
    <NuxtPage></NuxtPage>
</template>
<script setup>
    import { watch } from 'vue';
    const route = useRoute();
    watch(() => route.path, 
        (newValue) => {
            const cookie = useCookie('session');
            if (!cookie.value) {
                console.log('setar cookie');
            }
        }
    );
</script>