import { QueryDebugMessage } from 'console-vue-query-devtools-sdk/src/global';
import { CUSTOM_EVENT_NAME } from 'console-vue-query-devtools-sdk';

(function () {
    const init = () => {
        const hook = window.__VUE_QUERY_DEVTOOLS__;
        if (!hook?.getQueryClient) {
            console.log('[Injected] No QueryClient found');
            return;
        }

        const queryClient = hook.getQueryClient();
        if (!queryClient) return;

        console.log('[Injected] QueryClient found. Starting subscription.');

        queryClient.getQueryCache().subscribe(() => {
            const queries = queryClient
                .getQueryCache()
                .getAll()
                .map((query) => {
                    return {
                        queryKey: query.queryKey,
                        queryHash: query.queryHash,
                        state: query.state,
                        gcTime: query.gcTime,
                        staleTime: query.options?.staleTime,
                        enabled: query.options?.enabled,
                    };
                });
            const message: QueryDebugMessage = {
                source: 'console-vue-query-devtools',
                type: 'QUERY_DEBUG_DATA',
                queries,
            };
            window.postMessage(message, '*');
        });
    };

    window.addEventListener(CUSTOM_EVENT_NAME, () => {
        console.log('[Injected] QueryClient registered event received');
        init();
    });
})();
