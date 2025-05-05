import * as Accordion from '@radix-ui/react-accordion';
import { Text, Section } from '@radix-ui/themes';
import { useState } from 'react';
import { accordionRoot, noQuerySection } from '@/devtools/components/query-key-accordion/index.css';
import { ConsoleQueryMessageData } from 'console-vue-query-devtools-sdk/src/global';
import QueryKeyAccordionItem from '@/devtools/components/query-key-accordion/QueryKeyAccordionItem';

interface Props {
    query: ConsoleQueryMessageData[];
}

export default function QueryKeyAccordion({ query }: Props) {
    const [selected, setSelected] = useState<string[]>([]);
    const handleValueChange = (value: string[]) => {
        setSelected(value);
    };

    if (query.length === 0) {
        return (
            <Section className={noQuerySection}>
                <Text>No query found</Text>
            </Section>
        );
    }

    return (
        <Accordion.Root
            className={accordionRoot}
            type="multiple"
            value={selected}
            onValueChange={handleValueChange}
        >
            {query.map((item, index) => {
                const id = `${item.queryKey.join('|')}-${index}`;
                return <QueryKeyAccordionItem key={id} query={item} />;
            })}
        </Accordion.Root>
    );
}
