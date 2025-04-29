<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import { onMounted } from 'vue';

const client = useQueryClient()

onMounted(() => {
    try {
        window.__VUE_QUERY_DEVTOOLS__?.registerClient(client)
        console.debug('[Devtools] QueryClient registered from Devtools.vue')
    } catch (e) {
        console.warn('[Devtools] Failed to register QueryClient:', e)
    }
});
</script>

<template>
    <!-- No DOM output -->
</template>