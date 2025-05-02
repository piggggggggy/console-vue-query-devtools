import { Select } from 'radix-ui';
import { forwardRef, memo } from 'react';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import {
    selectTrigger,
    selectIcon,
    selectContent,
    selectViewport,
    selectItem,
    selectItemIndicator,
    selectScrollButton,
} from './index.css';

interface Props {
    selectedWorkspace: string;
    workspaceList: string[];
    handleWorkspaceChange: (value: string) => void;
}

const WorkspaceSelectDropdown = memo(function WorkspaceSelectDropdown({
    selectedWorkspace,
    workspaceList,
    handleWorkspaceChange,
}: Props) {
    if (selectedWorkspace === '__none__') {
        return null;
    }

    return (
        <Select.Root value={selectedWorkspace} onValueChange={handleWorkspaceChange}>
            <Select.Trigger className={selectTrigger} aria-label="Workspace">
                <Select.Value placeholder="Select a workspace" />
                <Select.Icon className={selectIcon}>
                    <ChevronDownIcon />
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content className={selectContent}>
                    <Select.ScrollUpButton className={selectScrollButton}>
                        <ChevronUpIcon />
                    </Select.ScrollUpButton>
                    <Select.Viewport className={selectViewport}>
                        {workspaceList.length > 0 ? (
                            workspaceList.map((item) => (
                                <SelectItem key={item} value={item}>
                                    {item}
                                </SelectItem>
                            ))
                        ) : (
                            <SelectItem value="__none__" disabled>
                                No Workspaces
                            </SelectItem>
                        )}
                    </Select.Viewport>
                    <Select.ScrollDownButton className={selectScrollButton}>
                        <ChevronDownIcon />
                    </Select.ScrollDownButton>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
});
export default WorkspaceSelectDropdown;

const SelectItem = memo(
    forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof Select.Item>>(
        ({ children, className, ...props }, forwardedRef) => {
            console.log(props);
            return (
                <Select.Item
                    {...props}
                    ref={forwardedRef}
                    className={`${selectItem} ${className ?? ''}`}
                >
                    <Select.ItemText>{children}</Select.ItemText>
                    <Select.ItemIndicator className={selectItemIndicator}>
                        <CheckIcon />
                    </Select.ItemIndicator>
                </Select.Item>
            );
        }
    )
);
