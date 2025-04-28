import { DevToolsIncomingMessage, DevToolsOutgoingMessage } from "@sdk/type";

// Inject the injected.js into the page
const script = document.createElement('script');
script.src = chrome.runtime.getURL('content/injected.js');
script.onload = () => {
  script.remove();
};
(document.head || document.documentElement).appendChild(script);

// Listen for messages from the page
window.addEventListener('message', (event) => {
  if (event.source !== window) return;

  const data = event.data as DevToolsIncomingMessage;

  if (data?.source === 'console-vue-query-devtools' && data.type === 'QUERY_DEBUG_DATA') {
    const outgoingMessage: DevToolsOutgoingMessage = {
      type: data.type,
      queries: data.queries,
    };
    chrome.runtime.sendMessage(outgoingMessage);
  }
});