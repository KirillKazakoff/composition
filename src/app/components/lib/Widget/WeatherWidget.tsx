import React from 'react';

import weatherData from '../../../data/weatherData';
import { Flex } from '../../primitives/Flex';
import Widget from './Widget';
import Text from '../../primitives/Text';

import { ListItem, ListItemProps } from './ListItem';
import { WidgetHeading } from './WidgetHeading';

export default function WeatherWidget({ icon, ...props }: ListItemProps) {
    return (
        <Widget {...props}>
            <WidgetHeading heading='Погода' />
            <ListItem icon={icon}>
                <Text fontSize={5}>{weatherData.morning}</Text>
                <Flex
                    gap='5px' flexDirection='column'
                    alignSelf='start'
                >
                    <Text>
                        Утром
                        {' '}
                        {weatherData.morning}
                    </Text>
                    <Text>
                        днем
                        {' '}
                        {weatherData.day}
                    </Text>
                </Flex>
            </ListItem>
        </Widget>
    );
}
