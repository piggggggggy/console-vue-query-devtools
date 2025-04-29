<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query';
import { onMounted } from 'vue';

onMounted(() => {
    const queryClient = useQueryClient();
    if (typeof window !== 'undefined') {
        window.__VUE_QUERY_DEVTOOLS__?.registerClient(queryClient);
    }
});
</script>

<template>
    <!-- No DOM output -->
</template>