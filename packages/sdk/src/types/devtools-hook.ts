import type { QueryClient } from '@tanstack/vue-query';

export interface ConsoleVueQueryDevtoolsHook {
    registerClient: (client: QueryClient | any) => void;
    getQueries: () => ConsoleVueQueryDevtoolsQuery[];
}

export interface ConsoleVueQueryDevtoolsQuery {
    queryKey: readonly unknown[];
    state: unknown;
    observers: number;
    gcTime: number;
}

export interface QueryDebugMessage {
    source: 'console-vue-query-devtools';
    type: 'QUERY_DEBUG_DATA';
    queries: ConsoleVueQueryDevtoolsQuery[];
}

export type DevToolsIncomingMessage = QueryDebugMessage;

export interface DevToolsOutgoingMessage {
    type: 'QUERY_DEBUG_DATA';
    queries: ConsoleVueQueryDevtoolsQuery[];
}

export type MessageType = 'QUERY_DEBUG_DATA';
