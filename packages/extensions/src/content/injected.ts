import { QueryDebugMessage } from "@console-vue-query-devtools/types";
import '@console-vue-query-devtools/types/global';

(function() {
    const trySendQueries = () => {
      const hook = window.__VUE_QUERY_DEVTOOLS__;
      if (hook && hook.getQueries) {
        const message: QueryDebugMessage = {
          source: 'console-vue-query-devtools',
          type: 'QUERY_DEBUG_DATA',
          queries: hook.getQueries(),
        };
        window.postMessage(message, '*');
      }
    };
  
    setInterval(trySendQueries, 2000);
  })();
