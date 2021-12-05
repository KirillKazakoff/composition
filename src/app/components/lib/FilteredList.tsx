import React from 'react';
import { nanoid } from 'nanoid';
import Filter from './Filter';
import { NewsDataType } from '../../data/newsData';
import { Flex, FlexProps } from '../primitives/Flex';

interface FilteredListProps extends FlexProps {
    contentData: NewsDataType;
}

export default function FilteredList({ contentData, ...props }: FilteredListProps) {
    const [activeFilter, setActiveFilter] = React.useState('now');

    const filters = Object.entries(contentData.navBar).map(([name, value]) => {
        const onClick = () => setActiveFilter(name);

        return (
            <Filter
                key={nanoid()}
                name={name}
                onClick={onClick}
                active={name === activeFilter ? true : null}
            >
                {value}
            </Filter>
        );
    });

    const listItems = contentData.newsList[activeFilter].map((item) => {
        return (
            <Flex color='primary' key={nanoid()}>
                {item}
            </Flex>
        );
    });

    return (
        <Flex
            flexDirection='column' {...props}
            gap='10px'
        >
            <Flex flexDirection='row' gap='30px'>
                {filters}
            </Flex>
            <Flex flexDirection='column' gap='20px'>
                {listItems}
            </Flex>
        </Flex>
    );
}
