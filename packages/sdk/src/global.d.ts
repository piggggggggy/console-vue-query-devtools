import type { QueryClient } from '@tanstack/vue-query';
import type { ConsoleVueQueryDevtoolsHook } from './types/devtools-hook';

declare global {
  interface Window {
    __VUE_QUERY_DEVTOOLS__?: ConsoleVueQueryDevtoolsHook;
  }
}

export {};