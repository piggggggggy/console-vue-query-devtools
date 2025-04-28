import type { QueryClient } from '@tanstack/vue-query';
import type { ConsoleVueQueryDevtoolsHook } from '@console-vue-query-devtools/types';

declare global {
  interface Window {
    __VUE_QUERY_DEVTOOLS__?: ConsoleVueQueryDevtoolsHook;
  }
}

export {};