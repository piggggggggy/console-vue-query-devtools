import ContextTabs from './components/context-tabs/ContextTabs';
import { Container } from '@radix-ui/themes';
import { useQueryDebugListener } from './hooks/useQueryDebugListener';

export default function Layout() {
    const query = useQueryDebugListener();

    return (
        <Container>
            <ContextTabs query={query} />
        </Container>
    );
}
