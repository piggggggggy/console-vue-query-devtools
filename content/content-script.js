// Inject the injected.js into the page
const script = document.createElement('script');
script.src = chrome.runtime.getURL('content/injected.js');
script.onload = function() {
  this.remove();
};
(document.head || document.documentElement).appendChild(script);

// Listen for messages from the page
window.addEventListener('message', (event) => {
  if (event.source !== window) return;
  if (event.data?.source === 'vue-query-devtools' && event.data.type === 'QUERY_DEBUG_DATA') {
    chrome.runtime.sendMessage({
      type: 'QUERY_DEBUG_DATA',
      queries: event.data.queries,
    });
  }
});