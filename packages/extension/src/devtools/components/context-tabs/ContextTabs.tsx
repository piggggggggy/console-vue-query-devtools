import { ConsoleVueQueryDevtoolsQuery } from '@console-vue-query-devtools-sdk/src/global';
import { Tabs } from 'radix-ui';
import { useEffect, useMemo, useState } from 'react';
import { tabsList, tabsRoot, tabsTrigger, tabsContent } from './index.css';
import QueryKeyList from '../query-key-list/QueryKeyList';
import { ContextTabKey } from '../../types/context';
import { CONTEXT_TAB } from '../../contants/context';
import WorkspaceSelectDropdown from '../workspace-select-dropdown/WorkspaceSelectDropdown';
interface Props {
    query: ConsoleVueQueryDevtoolsQuery[];
}

export default function ContextTabs({ query }: Props) {
    const [tab, setTab] = useState<ContextTabKey>(CONTEXT_TAB.ADMIN);
    const [workspace, setWorkspace] = useState<string>('');

    // computed
    const filteredQueryItems = useMemo(() => {
        if (tab === CONTEXT_TAB.WORKSPACE) {
            return [];
        }
        return query
            .filter((item) => {
                const queryKey = item.queryKey;
                if (!queryKey || queryKey.length === 0) return false;
                return queryKey[0] === tab;
            })
            .map((item) => {
                return {
                    ...item,
                    queryKey: item.queryKey.slice(1),
                };
            });
    }, [query, tab]);
    const filteredByWorkspaceQueryItems = useMemo(() => {
        if (tab !== CONTEXT_TAB.WORKSPACE) {
            return [];
        }
        return query
            .filter((item) => {
                const queryKey = item.queryKey;
                return (
                    queryKey &&
                    queryKey.length > 2 &&
                    queryKey[0] === CONTEXT_TAB.WORKSPACE &&
                    queryKey[1] === workspace
                );
            })
            .map((item) => {
                return {
                    ...item,
                    queryKey: item.queryKey.slice(2),
                };
            });
    }, [query, workspace, tab]);
    const workspaceList = useMemo<string[]>(() => {
        const workspaceList = new Set<string>();
        if (tab !== CONTEXT_TAB.WORKSPACE) {
            return [];
        }
        query
            .filter((item) => {
                const queryKey = item.queryKey;
                return queryKey && queryKey.length > 2 && queryKey[0] === CONTEXT_TAB.WORKSPACE;
            })
            .forEach((item) => {
                workspaceList.add(String(item.queryKey[1]));
            });
        return Array.from(workspaceList);
    }, [query, tab]);

    // lifecycle
    useEffect(() => {
        if (tab === CONTEXT_TAB.WORKSPACE && workspaceList.length > 0 && !workspace) {
            setWorkspace(workspaceList[0]);
        }
    }, [tab, workspaceList]);

    // Event
    const handleTabChange = (value: string) => {
        setTab(value as ContextTabKey);
    };
    const handleWorkspaceChange = (value: string) => {
        setWorkspace(value);
    };

    return (
        <Tabs.Root className={tabsRoot} value={tab} onValueChange={handleTabChange}>
            <Tabs.List className={tabsList}>
                {Object.values(CONTEXT_TAB).map((_tab) => (
                    <Tabs.Trigger key={_tab} className={tabsTrigger} value={_tab}>
                        {_tab}
                    </Tabs.Trigger>
                ))}
            </Tabs.List>
            <Tabs.Content className={tabsContent} value={tab}>
                {tab === CONTEXT_TAB.WORKSPACE ? (
                    <>
                        <WorkspaceSelectDropdown
                            selectedWorkspace={workspace}
                            workspaceList={workspaceList}
                            handleWorkspaceChange={handleWorkspaceChange}
                        />
                        <QueryKeyList query={filteredByWorkspaceQueryItems} />
                    </>
                ) : (
                    <QueryKeyList query={filteredQueryItems} />
                )}
            </Tabs.Content>
        </Tabs.Root>
    );
}
