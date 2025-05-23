import type { QueryClient } from '@tanstack/vue-query';
import { DefineComponent } from 'vue';
import Devtools from './Devtools.vue';
import { CUSTOM_EVENT_NAME } from './constant';

// Re-export constants
export * from './constant';

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
                
            window.dispatchEvent(new CustomEvent(CUSTOM_EVENT_NAME));
        },
        getQueryClient() {
          if (!queryClient) {
              console.warn('[SDK] No query client registered.');
              return null;
          }
          return queryClient;
        }
      };
}());

export const ConsoleVueQueryDevtools = (
    process.env.NODE_ENV === 'development'
        ? Devtools 
        : () => null
) as DefineComponent<{}, {}, unknown>
