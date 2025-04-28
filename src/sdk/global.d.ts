import type { ConsoleVueQueryDevtoolsHook } from '@sdk/type';

declare global {
  interface Window {
    __VUE_QUERY_DEVTOOLS__?: ConsoleVueQueryDevtoolsHook;
  }
}