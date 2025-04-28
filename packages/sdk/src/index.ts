import type { QueryClient } from '@tanstack/vue-query';
import '@console-vue-query-devtools/types/global';

(function () {
    if (typeof window === 'undefined') return;
    if (window.__VUE_QUERY_DEVTOOLS__) return;

    let queryClient: QueryClient | null = null;

    window.__VUE_QUERY_DEVTOOLS__ = {
        registerClient(client: QueryClient) {
          queryClient = client;
          console.log('[SDK] QueryClient registered.');
        },
        getQueries() {
          if (!queryClient) return [];
          return queryClient.getQueryCache().getAll().map((query) => ({
            queryKey: query.queryKey,
            state: query.state,
            observers: query.getObserversCount?.() ?? query.observers.length,
            gcTime: query.gcTime,
          }));
        }
      };
}());