import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import { tabsRoot } from '@/devtools/components/context-tabs/index.css';
import { ContextTabKey } from '@/devtools/types/context';
import { CONTEXT_TAB } from '@/devtools/contants/context';
import { ConsoleQueryMessageData } from 'console-vue-query-devtools-sdk/src/global';
import ContextTabHeader from '@/devtools/components/context-tabs/ContextTabHeader';
import ContextTabLayout from '@/devtools/components/context-tabs/ContextTabLayout';
interface Props {
    query: ConsoleQueryMessageData[];
}

export default function ContextTabs({ query }: Props) {
    const [tab, setTab] = useState<ContextTabKey>(CONTEXT_TAB.ADMIN);

    // Event
    const handleTabChange = (value: string) => {
        setTab(value as ContextTabKey);
    };

    return (
        <Tabs.Root className={tabsRoot} value={tab} onValueChange={handleTabChange}>
            <ContextTabHeader />
            <ContextTabLayout query={query} tab={tab} />
        </Tabs.Root>
    );
}
