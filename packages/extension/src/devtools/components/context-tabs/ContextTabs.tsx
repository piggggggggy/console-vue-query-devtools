import { Tabs } from 'radix-ui';
import { useState } from 'react';
import { tabsRoot } from './index.css';
import { ContextTabKey } from '../../types/context';
import { CONTEXT_TAB } from '../../contants/context';
import { ConsoleQueryMessageData } from 'console-vue-query-devtools-sdk/src/global';
import ContextTabHeader from './ContextTabHeader';
import ContextTabLayout from './ContextTabLayout';

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
