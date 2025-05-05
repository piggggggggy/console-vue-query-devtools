import * as Tabs from '@radix-ui/react-tabs';
import { tabsContent } from '@/devtools/components/context-tabs/index.css';
import QueryKeyAccordion from '@/devtools/components/query-key-accordion/QueryKeyAccordion';
import { CONTEXT_TAB } from '@/devtools/contants/context';
import { ConsoleQueryMessageData } from 'console-vue-query-devtools-sdk/src/global';
import WorkspaceSelectDropdown from '@/devtools/components/workspace-select-dropdown/WorkspaceSelectDropdown';

interface Props {
    visibleQueries: ConsoleQueryMessageData[];
    workspace: string;
    workspaceList: string[];
    handleWorkspaceChange: (value: string) => void;
}

export default function ContextTabWorkspace({
    visibleQueries,
    workspace,
    workspaceList,
    handleWorkspaceChange,
}: Props) {
    return (
        <Tabs.Content className={tabsContent} value={CONTEXT_TAB.WORKSPACE}>
            <WorkspaceSelectDropdown
                selectedWorkspace={workspace}
                workspaceList={workspaceList}
                handleWorkspaceChange={handleWorkspaceChange}
            />
            <QueryKeyAccordion query={visibleQueries} />
        </Tabs.Content>
    );
}
