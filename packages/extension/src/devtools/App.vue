<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ConsoleVueQueryDevtoolsQuery } from '@console-vue-query-devtools-sdk/src/global';

const queries = ref<ConsoleVueQueryDevtoolsQuery[]>([]);

onMounted(() => {
    window.chrome.runtime.onMessage.addListener((message) => {
        if (message.type === 'QUERY_DEBUG_DATA') {
            queries.value = message.queries;
        }
    });
});
</script>

<template>
    <div class="h-screen p-4 bg-gray-700">
        <h1 class="text-xl font-bold mb-2 text-gray-100">Vue Query Devtools</h1>
        <div v-for="query in queries" :key="query.queryKey.join(',')">
            <div class="flex items-center justify-between">
                <span class="text-sm text-violet-500">{{ query.queryKey.join(',') }}</span>
                <!-- <span class="text-sm text-gray-100">{{ query.state }}</span> -->
            </div>
        </div>
    </div>
</template>
