<script setup lang="ts">
import { QueryClient, useQueryClient } from '@tanstack/vue-query';
import { onMounted } from 'vue';

interface Props {
    client?: QueryClient;
}

const props = defineProps<Props>()

const client = props.client || useQueryClient()

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