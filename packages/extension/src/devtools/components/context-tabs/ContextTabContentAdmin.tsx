import * as Tabs from '@radix-ui/react-tabs';
import { tabsContent } from '@/devtools/components/context-tabs/index.css';
import QueryKeyAccordion from '@/devtools/components/query-key-accordion/QueryKeyAccordion';
import { CONTEXT_TAB } from '@/devtools/contants/context';
import { ConsoleQueryMessageData } from 'console-vue-query-devtools-sdk/src/global';

interface Props {
    visibleQueries: ConsoleQueryMessageData[];
}

export default function ContextTabAdmin({ visibleQueries }: Props) {
    return (
        <Tabs.Content className={tabsContent} value={CONTEXT_TAB.ADMIN}>
            <QueryKeyAccordion query={visibleQueries} />
        </Tabs.Content>
    );
}
