import React from 'react';
import { stocksData } from '../../data/stocksData';
import { infoData } from '../../data/infoData';
import { newsData } from '../../data/newsData';

import FilteredList from '../lib/FilteredList';
import Info from '../lib/Info';
import Stocks from '../lib/Stocks';
import { Flex } from '../primitives/primitives';

export default function Header() {
    return (
        <Flex
            flexWrap='wrap' padding='10px'
            alignItems='flex-start' border='primary'
        >
            <FilteredList
                contentData={newsData} width='80%'
                pb='20px'
            />
            <Info contentData={infoData} width='15%' />
            <Stocks contentData={stocksData} gap='20px' />
        </Flex>
    );
}
