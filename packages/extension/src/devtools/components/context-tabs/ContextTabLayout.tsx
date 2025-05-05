import { ConsoleQueryMessageData } from 'console-vue-query-devtools-sdk/src/global';
import { ContextTabKey } from '@/devtools/types/context';
import { CONTEXT_TAB } from '@/devtools/contants/context';
import { useCallback, useMemo, useState } from 'react';
import useDebounce from '@/devtools/utils/use-debounce';
import ContextTabAdmin from '@/devtools/components/context-tabs/ContextTabContentAdmin';
import ContextTabWorkspace from '@/devtools/components/context-tabs/ContextTabContentWorkspace';
import ContextTabUser from '@/devtools/components/context-tabs/ContextTabContentUser';
import QueryToolBox from '@/devtools/components/query-tool-box/QueryToolBox';
import { useWorkspaceList } from '@/devtools/hooks/use-workspace-list';
interface Props {
    query: ConsoleQueryMessageData[];
    tab: ContextTabKey;
}

export default function ContextTabLayout({ query, tab }: Props) {
    const [searchText, setSearchText] = useState('');
    const debouncedSearchText = useDebounce(searchText, 300);
    const { workspace, setWorkspace, workspaceList } = useWorkspaceList(tab, query);

    // computed
    const visibleQueries = useMemo(
        () => getVisibleQueries(query, tab, workspace, debouncedSearchText),
        [query, tab, workspace, debouncedSearchText]
    );

    // Event
    const handleWorkspaceChange = useCallback((value: string) => {
        setWorkspace(value);
    }, []);
    const handleSearchTextChange = (value: string) => {
        setSearchText(value);
    };

    return (
        <>
            <QueryToolBox searchText={searchText} onSearchTextChange={handleSearchTextChange} />
            <ContextTabAdmin visibleQueries={visibleQueries} />
            <ContextTabWorkspace
                visibleQueries={visibleQueries}
                workspace={workspace}
                workspaceList={workspaceList}
                handleWorkspaceChange={handleWorkspaceChange}
            />
            <ContextTabUser visibleQueries={visibleQueries} />
        </>
    );
}

const getVisibleQueries = (
    query: ConsoleQueryMessageData[],
    tab: ContextTabKey,
    workspace: string,
    searchText: string
): ConsoleQueryMessageData[] => {
    if (tab === CONTEXT_TAB.WORKSPACE) {
        return query.filter(
            (item) =>
                Array.isArray(item.queryKey) &&
                item.queryKey?.[0] === CONTEXT_TAB.WORKSPACE &&
                item.queryKey?.[1] === workspace &&
                item.queryHash?.includes(searchText)
        );
    }
    return query.filter(
        (item) =>
            Array.isArray(item.queryKey) &&
            item.queryKey?.[0] === tab &&
            item.queryHash?.includes(searchText)
    );
};
