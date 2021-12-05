import { nanoid } from 'nanoid';
import React from 'react';
import Text from '../primitives/Text';

import { StocksDataType } from '../../data/stocksData';
import { Flex, FlexProps } from '../primitives/Flex';

interface StocksProps extends FlexProps {
    contentData: StocksDataType;
}

const Stocks = ({ contentData, ...props }: StocksProps) => {
    const stocks = Object.entries(contentData).map(([stock, value]) => {
        return (
            <Flex key={nanoid()} gap='8px'>
                <Text fontWeight={500}>{stock}</Text>
                <Text fontWeight={500} color='hint'>
                    {value}
                </Text>
            </Flex>
        );
    });
    return <Flex {...props}>{stocks}</Flex>;
};

export default Stocks;
