let queries = [];

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'QUERY_DEBUG_DATA') {
    queries = message.queries;
    renderQueries();
  }
});

function renderQueries() {
  const container = document.getElementById('query-list');
  container.innerHTML = '';

  queries.forEach((query, index) => {
    const el = document.createElement('div');
    el.className = 'query-item';
    el.innerText = `#${index + 1}: ${JSON.stringify(query.queryKey)}`;
    container.appendChild(el);
  });
}