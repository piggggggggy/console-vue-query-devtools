import { CONTEXT_TAB } from '../../contants/context';
import { tabsList, tabsTrigger } from './index.css';
import { Tabs } from 'radix-ui';

export default function ContextTabHeader() {
    return (
        <Tabs.List className={tabsList}>
            {Object.values(CONTEXT_TAB).map((_tab) => (
                <Tabs.Trigger key={_tab} className={tabsTrigger} value={_tab}>
                    {_tab}
                </Tabs.Trigger>
            ))}
        </Tabs.List>
    );
}
