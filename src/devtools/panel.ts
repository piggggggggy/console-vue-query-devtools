import { DevToolsOutgoingMessage, ConsoleVueQueryDevtoolsQuery } from "@sdk/type";

let queries: ConsoleVueQueryDevtoolsQuery[] = [];

chrome.runtime.onMessage.addListener((message: DevToolsOutgoingMessage) => {
  if (message.type === 'QUERY_DEBUG_DATA') {
    queries = message.queries;
    renderQueries();
  }
});

const renderQueries = () => {
  const container = document.getElementById('query-list') as HTMLDivElement | null;
  if (!container) return;
  container.innerHTML = '';

  queries.forEach((query, index) => {
    const el = document.createElement('div');
    el.className = 'query-item';
    el.innerText = `#${index + 1}: ${JSON.stringify(query.queryKey)}`;
    container.appendChild(el);
  });
}