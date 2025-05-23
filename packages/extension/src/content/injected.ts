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

        const throttleTime = 500;
        const throttledQuery = _throttle(() => {
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
                        observerCount: query.observers.length,
                    };
                });
            const message: QueryDebugMessage = {
                source: 'console-vue-query-devtools',
                type: 'QUERY_DEBUG_DATA',
                queries,
            };
            window.postMessage(message, '*');
        }, throttleTime);

        queryClient.getQueryCache().subscribe(() => {
            throttledQuery();
        });
    };

    window.addEventListener(CUSTOM_EVENT_NAME, () => {
        console.log('[Injected] QueryClient registered event received');
        init();
    });
})();

const _throttle = (fn: (...args: any[]) => void, delay: number) => {
    let last = 0;
    return (...args: any[]) => {
        const now = Date.now();
        if (now - last >= delay) {
            last = now;
            fn(...args);
        }
    };
};
