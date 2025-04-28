(function() {
    const trySendQueries = () => {
      const hook = window.__VUE_QUERY_DEVTOOLS__;
      if (hook && hook.getQueries) {
        const queries = hook.getQueries();
        window.postMessage({
          source: 'console-vue-query-devtools',
          type: 'QUERY_DEBUG_DATA',
          queries,
        }, '*');
      }
    };
  
    setInterval(trySendQueries, 2000);
  })();


  