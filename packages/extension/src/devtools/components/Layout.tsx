import { ConsoleVueQueryDevtoolsQuery } from '@console-vue-query-devtools-sdk/src/global';
import { useEffect, useState } from 'react';
import ContextTabs from './context-tabs/ContextTabs';
import { Container } from '@radix-ui/themes';

export default function Layout() {
    const [query, setQuery] = useState<ConsoleVueQueryDevtoolsQuery[]>([]);

    useEffect(() => {
        window.chrome.runtime.onMessage.addListener((message) => {
            if (message.type === 'QUERY_DEBUG_DATA') {
                setQuery(message.queries);
            }
        });
    }, []);

    return (
        <Container>
            <ContextTabs query={query} />
        </Container>
    );
}
