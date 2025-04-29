import type { QueryClient } from '@tanstack/vue-query';
import { DefineComponent } from 'vue';
import Devtools from './Devtools.vue';

(function () {
    if (typeof window === 'undefined') return;
    if (window.__VUE_QUERY_DEVTOOLS__) return;

    let queryClient: QueryClient | null = null;

    window.__VUE_QUERY_DEVTOOLS__ = {
        registerClient(client: QueryClient) {
            if (!client || typeof client.getQueryCache !== 'function') {
                console.warn('[SDK] Invalid QueryClient passed to registerClient.');
                return;
            }
            queryClient = client;
            console.log('[SDK] QueryClient registered.');
        },
        getQueries() {
          if (!queryClient) {
              console.warn('[SDK] No query client registered.');
              return [];
          }
          return queryClient.getQueryCache().getAll().map((query) => ({
              queryKey: query.queryKey,
              state: query.state,
              observers: query.getObserversCount?.() ?? query.observers.length,
              gcTime: query.gcTime,
          }));
        }
      };
}());

export const ConsoleVueQueryDevtools = (
  (typeof import.meta !== 'undefined' && import.meta.env?.MODE === 'development') ||
  (typeof process !== 'undefined' && process.env?.NODE_ENV === 'development')
        ? Devtools 
        : () => null
) as DefineComponent<{}, {}, unknown>
