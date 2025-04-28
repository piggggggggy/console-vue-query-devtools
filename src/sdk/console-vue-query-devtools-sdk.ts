import type { QueryClient } from '@tanstack/vue-query';

(function () {
    if (typeof window === 'undefined') return;
    if ((window as any).__VUE_QUERY_DEVTOOLS__) return;

    (window as any).__VUE_QUERY_DEVTOOLS__ = (function () {
        let queryClient: QueryClient | null = null;

        return {
            registerClient(client: QueryClient) {
                queryClient = client;
                console.log('[Vue Query Devtools SDK] QueryClient registered');
            },
            getQueries() {
                if (!queryClient) return [];
                return queryClient.getQueryCache().getAll().map((query) => ({
                    queryKey: query.queryKey,
                    state: query.state,
                    observers: query.getObserversCount?.() ?? query.observers.length,
                    gcTime: query.gcTime,
                }));
            },
        };
    }());
}());