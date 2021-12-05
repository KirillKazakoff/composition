import React from 'react';

import WeatherData from '../../../data/WeatherData';
import { Flex } from '../../primitives/Flex';
import Widget from './Widget';
import Text from '../../primitives/Text';

import { ListItem, ListItemProps } from './ListItem';

export default function WeatherWidget({ icon, ...props }: ListItemProps) {
    return (
        <Widget heading={{ main: 'Погода' }} {...props}>
            <ListItem icon={icon}>
                <Text fontSize={5}>{WeatherData.morning}</Text>
                <Flex
                    gap='5px' flexDirection='column'
                    alignSelf='start'
                >
                    <Text>
                        Утром
                        {' '}
                        {WeatherData.morning}
                    </Text>
                    <Text>
                        днем
                        {' '}
                        {WeatherData.day}
                    </Text>
                </Flex>
            </ListItem>
        </Widget>
    );
}
