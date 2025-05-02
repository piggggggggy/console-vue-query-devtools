import { ConsoleQueryMessageData } from 'console-vue-query-devtools-sdk/src/global';
import { ContextTabKey } from '@/devtools/types/context';
import { CONTEXT_TAB } from '@/devtools/contants/context';
import { Tabs } from 'radix-ui';
import QueryKeyAccordion from '../query-key-accordion/QueryKeyAccordion';
import WorkspaceSelectDropdown from '../workspace-select-dropdown/WorkspaceSelectDropdown';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { tabsContent } from './index.css';

interface Props {
    query: ConsoleQueryMessageData[];
    tab: ContextTabKey;
}

export default function ContextTabLayout({ query, tab }: Props) {
    const [workspace, setWorkspace] = useState<string>('');

    // computed
    const visibleQueries = useMemo(
        () => getVisibleQueries(query, tab, workspace),
        [query, tab, workspace]
    );
    const workspaceList = useMemo(() => {
        return tab === CONTEXT_TAB.WORKSPACE ? getWorkspaceList(query) : [];
    }, [query, tab]);

    // init
    useEffect(() => {
        if (tab === CONTEXT_TAB.WORKSPACE && workspaceList.length > 0 && !workspace) {
            setWorkspace(workspaceList[0]);
        }
    }, [tab, workspaceList]);

    // Event
    const handleWorkspaceChange = useCallback((value: string) => {
        setWorkspace(value);
    }, []);

    return (
        <>
            <Tabs.Content className={tabsContent} value={CONTEXT_TAB.ADMIN}>
                <QueryKeyAccordion query={visibleQueries} />
            </Tabs.Content>
            <Tabs.Content className={tabsContent} value={CONTEXT_TAB.WORKSPACE}>
                <WorkspaceSelectDropdown
                    selectedWorkspace={workspace}
                    workspaceList={workspaceList}
                    handleWorkspaceChange={handleWorkspaceChange}
                />
                <QueryKeyAccordion query={visibleQueries} />
            </Tabs.Content>
            <Tabs.Content className={tabsContent} value={CONTEXT_TAB.USER}>
                <QueryKeyAccordion query={visibleQueries} />
            </Tabs.Content>
        </>
    );
}

const getVisibleQueries = (
    query: ConsoleQueryMessageData[],
    tab: ContextTabKey,
    workspace: string
): ConsoleQueryMessageData[] => {
    if (tab === CONTEXT_TAB.WORKSPACE) {
        return query
            .filter(
                (item) =>
                    item.queryKey?.[0] === CONTEXT_TAB.WORKSPACE && item.queryKey?.[1] === workspace
            )
            .map((item) => ({ ...item, queryKey: item.queryKey.slice(2) }));
    }
    return query
        .filter((item) => item.queryKey?.[0] === tab)
        .map((item) => ({ ...item, queryKey: item.queryKey.slice(1) }));
};

const getWorkspaceList = (query: ConsoleQueryMessageData[]): string[] => {
    const set = new Set<string>();
    query.forEach((item) => {
        if (item.queryKey?.[0] === CONTEXT_TAB.WORKSPACE && typeof item.queryKey[1] === 'string') {
            set.add(item.queryKey[1]);
        }
    });
    return Array.from(set);
};
