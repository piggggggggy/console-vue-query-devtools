import ContextTabs from '@/devtools/components/context-tabs/ContextTabs';
import { Container } from '@radix-ui/themes';
import { useQueryDebugListener } from '@/devtools/hooks/use-query-debug-listener';

export default function Layout() {
    const query = useQueryDebugListener();

    return (
        <Container>
            <ContextTabs query={query} />
        </Container>
    );
}
