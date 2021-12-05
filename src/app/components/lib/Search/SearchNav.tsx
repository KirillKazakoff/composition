import React from 'react';
import { nanoid } from 'nanoid';

import { Flex, FlexProps } from '../../primitives/Flex';
import SearchField from './SearchField';

interface SearchBarProps extends FlexProps {}

export default function SearchBar({ ...props }: SearchBarProps) {
    const items = [
        'Video',
        'Images',
        'News',
        'Maps',
        'Market',
        'Translator',
        'Broadcast',
        'etc',
    ].map((item) => {
        return (
            <SearchField
                key={nanoid()} cursor='pointer'
                color='primary'
            >
                {item}
            </SearchField>
        );
    });

    return (
        <Flex
            gap='10px' fontSize='20px'
            {...props}
        >
            {items}
        </Flex>
    );
}
