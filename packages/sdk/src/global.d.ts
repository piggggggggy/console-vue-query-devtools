import type { QueryClient, QueryKey, QueryState } from '@tanstack/vue-query';

declare global {
  interface Window {
    __VUE_QUERY_DEVTOOLS__?: ConsoleVueQueryDevtoolsHook;
  }
}

export interface ConsoleVueQueryDevtoolsHook {
    registerClient: (client: QueryClient | any) => void;
    getQueryClient: () => QueryClient | null;
}

export interface ConsoleQueryMessageData {
    queryKey: QueryKey;
    queryHash: string;
    state: QueryState;
    gcTime: number;
    staleTime?: number;
    enabled?: boolean;
    observerCount: number;
}

export interface QueryDebugMessage {
    source: 'console-vue-query-devtools';
    type: 'QUERY_DEBUG_DATA';
    queries: ConsoleQueryMessageData[];
}

export type DevToolsIncomingMessage = QueryDebugMessage;

export interface DevToolsOutgoingMessage {
    type: 'QUERY_DEBUG_DATA';
    queries: ConsoleQueryMessageData[];
}

export type MessageType = 'QUERY_DEBUG_DATA';
