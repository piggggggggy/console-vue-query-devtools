import { Accordion } from 'radix-ui';
import { Text } from '@radix-ui/themes';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { ConsoleQueryMessageData } from 'console-vue-query-devtools-sdk/src/global';
import {
    accordionItem,
    accordionContentText,
    accordionChevron,
    accordionHeader,
    accordionTrigger,
    triggerText,
    accordionContent,
} from './index.css';
import { forwardRef, lazy, memo, Suspense } from 'react';

const ReactJson = lazy(() => import('react-json-view'));

interface Props {
    query: ConsoleQueryMessageData;
}

const QueryKeyAccordionItem = memo(function QueryKeyAccordionItem({ query }: Props) {
    return (
        <Accordion.Item className={accordionItem} value={query.queryHash}>
            <AccordionTrigger>{JSON.stringify(query.queryKey)}</AccordionTrigger>
            <AccordionContent>
                <Suspense fallback={<div>Loading...</div>}>
                    <ReactJson
                        src={query}
                        theme="paraiso"
                        name={false}
                        collapsed
                        collapseStringsAfterLength={30}
                        quotesOnKeys={false}
                    />
                </Suspense>
            </AccordionContent>
        </Accordion.Item>
    );
});
export default QueryKeyAccordionItem;

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
