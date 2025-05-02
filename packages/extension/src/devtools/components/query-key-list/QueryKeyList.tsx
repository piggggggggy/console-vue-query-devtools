import { Accordion } from 'radix-ui';
import { Text } from '@radix-ui/themes';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { ConsoleVueQueryDevtoolsQuery } from '@console-vue-query-devtools-sdk/src/global';
import { forwardRef, useState } from 'react';
import {
    accordionRoot,
    accordionItem,
    accordionTrigger,
    accordionContent,
    accordionContentText,
    accordionChevron,
    accordionHeader,
    triggerText,
} from './index.css';
import getRandomId from '@/devtools/utills/get-random-id';

interface Props {
    query: ConsoleVueQueryDevtoolsQuery[];
}

export default function QueryKeyList({ query }: Props) {
    const [selected, setSelected] = useState<string[]>([]);
    const handleValueChange = (value: string[]) => {
        setSelected(value);
    };
    return (
        <Accordion.Root
            className={accordionRoot}
            type="multiple"
            value={selected}
            onValueChange={handleValueChange}
        >
            {query.map((item, index) => (
                <Accordion.Item
                    key={getRandomId()}
                    className={accordionItem}
                    value={`${item.queryKey.join('|')}-${index}`}
                >
                    <AccordionTrigger>{JSON.stringify(item.queryKey)}</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </Accordion.Item>
            ))}
        </Accordion.Root>
    );
}

const AccordionTrigger = forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<typeof Accordion.Trigger>
>(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className={accordionHeader}>
        <Accordion.Trigger
            className={`${accordionTrigger} ${className ?? ''}`}
            {...props}
            ref={forwardedRef}
        >
            <Text className={triggerText}>{children}</Text>
            <ChevronDownIcon className={accordionChevron} aria-hidden />
        </Accordion.Trigger>
    </Accordion.Header>
));

const AccordionContent = forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Accordion.Content>
>(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
        className={`${accordionContent} ${className ?? ''}`}
        {...props}
        ref={forwardedRef}
    >
        <div className={accordionContentText}>{children}</div>
    </Accordion.Content>
));
