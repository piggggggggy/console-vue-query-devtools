<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import { nextTick, onMounted } from 'vue';

onMounted(() => {
    nextTick(() => {
        try {
            const client = useQueryClient()
            window.__VUE_QUERY_DEVTOOLS__?.registerClient(client)
            console.debug('[Devtools] QueryClient registered from Devtools.vue')
        } catch (e) {
            console.warn('[Devtools] Failed to register QueryClient:', e)
        }
  })
});
</script>

<template>
    <!-- No DOM output -->
</template>