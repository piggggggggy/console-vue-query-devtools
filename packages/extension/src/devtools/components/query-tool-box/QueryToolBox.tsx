import { TextField, Box, IconButton } from '@radix-ui/themes';
import { MagnifyingGlassIcon, Cross1Icon } from '@radix-ui/react-icons';
import { ChangeEvent } from 'react';

interface Props {
    searchText: string;
    onSearchTextChange: (value: string) => void;
}

export default function QueryToolBox({ searchText, onSearchTextChange }: Props) {
    const handleClear = () => {
        onSearchTextChange('');
    };

    const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        onSearchTextChange(e.target.value);
    };

    return (
        <Box p="2">
            <TextField.Root
                placeholder="Search the docs…"
                size="3"
                style={{ width: '100%' }}
                value={searchText}
                onChange={handleSearchTextChange}
            >
                <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
                <TextField.Slot pr="3">
                    <IconButton variant="ghost" onClick={handleClear}>
                        <Cross1Icon height="16" width="16" />
                    </IconButton>
                </TextField.Slot>
            </TextField.Root>
        </Box>
    );
}
