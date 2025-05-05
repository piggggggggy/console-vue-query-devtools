import { ContextTabKey } from '@/devtools/types/context';
import { ConsoleQueryMessageData } from 'console-vue-query-devtools-sdk/src/global';
import { useMemo, useState, useEffect } from 'react';
import { CONTEXT_TAB } from '@/devtools/contants/context';

export const useWorkspaceList = (tab: ContextTabKey, query: ConsoleQueryMessageData[]) => {
    const workspaceList = useMemo(() => {
        return tab === CONTEXT_TAB.WORKSPACE ? _getWorkspaceList(query) : [];
    }, [query, tab]);

    const [workspace, setWorkspace] = useState('__none__');

    const shouldInitialize = useMemo(() => {
        return (
            tab === CONTEXT_TAB.WORKSPACE && workspaceList.length > 0 && workspace === '__none__'
        );
    }, [tab, workspaceList, workspace]);

    useEffect(() => {
        if (shouldInitialize) {
            setWorkspace(workspaceList[0]);
        }
    }, [shouldInitialize, workspaceList]);

    return {
        workspace,
        setWorkspace,
        workspaceList,
    };
};

const _getWorkspaceList = (query: ConsoleQueryMessageData[]): string[] => {
    const set = new Set<string>();
    query.forEach((item) => {
        if (
            Array.isArray(item.queryKey) &&
            item.queryKey?.[0] === CONTEXT_TAB.WORKSPACE &&
            typeof item.queryKey[1] === 'string' &&
            !!item.queryKey[1]
        ) {
            set.add(item.queryKey[1]);
        }
    });
    return Array.from(set);
};
