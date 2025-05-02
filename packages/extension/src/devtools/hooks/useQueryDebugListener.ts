import { useEffect, useState } from 'react';
import {
    ConsoleQueryMessageData,
    DevToolsOutgoingMessage,
} from 'console-vue-query-devtools-sdk/src/global';

type QueryDebugMessage = {
    type: 'QUERY_DEBUG_DATA';
    queries: ConsoleQueryMessageData[];
};

function isQueryDebugMessage(message: unknown): message is QueryDebugMessage {
    return (
        typeof message === 'object' &&
        message !== null &&
        (message as DevToolsOutgoingMessage).type === 'QUERY_DEBUG_DATA' &&
        Array.isArray((message as DevToolsOutgoingMessage).queries)
    );
}

export function useQueryDebugListener() {
    const [queries, setQueries] = useState<ConsoleQueryMessageData[]>([]);

    useEffect(() => {
        const handler = (message: unknown) => {
            if (isQueryDebugMessage(message)) {
                setQueries((prev) => {
                    const prevStr = JSON.stringify(prev);
                    const nextStr = JSON.stringify(message.queries);
                    return prevStr !== nextStr ? message.queries : prev;
                });
            }
        };

        chrome.runtime.onMessage.addListener(handler);
        return () => {
            chrome.runtime.onMessage.removeListener(handler);
        };
    }, []);

    return queries;
}
