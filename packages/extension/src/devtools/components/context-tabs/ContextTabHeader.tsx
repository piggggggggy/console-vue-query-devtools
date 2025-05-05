import { CONTEXT_TAB } from '@/devtools/contants/context';
import {
    tabsList,
    tabsTrigger,
    tabsTriggerText,
} from '@/devtools/components/context-tabs/index.css';
import * as Tabs from '@radix-ui/react-tabs';
import { Text } from '@radix-ui/themes';
import { toPascalCase } from '@/devtools/utils/pascal-case';
import { memo } from 'react';

const ContextTabHeader = memo(function ContextTabHeader() {
    return (
        <Tabs.List className={tabsList}>
            {Object.values(CONTEXT_TAB).map((_tab) => (
                <Tabs.Trigger key={_tab} className={tabsTrigger} value={_tab}>
                    <Text className={tabsTriggerText}>{toPascalCase(_tab)}</Text>
                </Tabs.Trigger>
            ))}
        </Tabs.List>
    );
});

export default ContextTabHeader;
