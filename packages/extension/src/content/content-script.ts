import {
    DevToolsIncomingMessage,
    DevToolsOutgoingMessage,
} from '@console-vue-query-devtools-sdk/src/global';

// Inject the injected.js into the page
const script = document.createElement('script');
script.src = chrome.runtime.getURL('content/injected.js');
script.onload = () => {
    script.remove();
};
(document.head || document.documentElement).appendChild(script);

// Listen for messages from the page
try {
    window.addEventListener('message', (event) => {
        if (event.source !== window) return;
        if (typeof chrome.runtime?.id !== 'string') return;

        const data = event.data as DevToolsIncomingMessage;

        if (data?.source === 'console-vue-query-devtools' && data.type === 'QUERY_DEBUG_DATA') {
            const outgoingMessage: DevToolsOutgoingMessage = {
                type: data.type,
                queries: data.queries,
            };
            chrome.runtime.sendMessage(outgoingMessage);
        }
    });
} catch (e) {
    console.warn('[Devtools] Content script event registration failed', e);
}
