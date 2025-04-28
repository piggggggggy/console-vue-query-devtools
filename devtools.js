function getQueries() {
    const queries = window.__QUERY_DEBUG__?.getSummary() ?? [];
    return queries;
}
  
function renderQueries() {
    const queries = getQueries();
    const container = document.getElementById('query-list');
    container.innerHTML = '';
  
    queries.forEach(q => {
        const el = document.createElement('div');
        el.className = q.isActive ? 'query active' : 'query inactive';
        el.innerText = `[${q.index}] ${JSON.stringify(q.queryKey)} (observers: ${q.observers})`;
        container.appendChild(el);
    });
}
  
setInterval(renderQueries, 2000);