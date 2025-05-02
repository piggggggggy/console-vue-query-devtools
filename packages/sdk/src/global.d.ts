import type { Query, QueryClient } from '@tanstack/vue-query';

declare global {
  interface Window {
    __VUE_QUERY_DEVTOOLS__?: ConsoleVueQueryDevtoolsHook;
  }
}

export interface ConsoleVueQueryDevtoolsHook {
    registerClient: (client: QueryClient | any) => void;
    getQueryClient: () => QueryClient | null;
}

export interface QueryDebugMessage {
    source: 'console-vue-query-devtools';
    type: 'QUERY_DEBUG_DATA';
    queries: Query[];
}

export type DevToolsIncomingMessage = QueryDebugMessage;

export interface DevToolsOutgoingMessage {
    type: 'QUERY_DEBUG_DATA';
    queries: Query[];
}

export type MessageType = 'QUERY_DEBUG_DATA';
