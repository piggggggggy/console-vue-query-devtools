import { Select } from 'radix-ui';
import { forwardRef } from 'react';
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

export default function WorkspaceSelectDropdown({
    selectedWorkspace,
    workspaceList,
    handleWorkspaceChange,
}: Props) {
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
                        {workspaceList.map((item) => (
                            <SelectItem key={item} value={item}>
                                {item}
                            </SelectItem>
                        ))}
                    </Select.Viewport>
                    <Select.ScrollDownButton className="SelectScrollButton">
                        <ChevronDownIcon />
                    </Select.ScrollDownButton>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
}

const SelectItem = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof Select.Item>>(
    ({ children, className, ...props }, forwardedRef) => {
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
);
