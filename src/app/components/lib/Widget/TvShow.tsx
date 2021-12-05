/* eslint-disable object-curly-newline */
import React from 'react';
import { FiPlay } from '@react-icons/all-files/fi/FiPlay';
import tvShowData from '../../../data/tvShowData';
import Widget from './Widget';
import { WidgetHeading } from './WidgetHeading';
import WidgetLabel from './WidgetLabel';
import { ListItem, ListItemProps } from './ListItem';
import Text from '../../primitives/Text';

export default function TvShow({ icon, ...props }: ListItemProps) {
    const content = tvShowData.map((item) => {
        const { time, title, chanel, href } = item;

        return (
            <ListItem
                gap='10px' href={href}
                icon={icon}
            >
                <Text>{time}</Text>
                <Text>{title}</Text>
                <Text color='hint'>{chanel}</Text>
            </ListItem>
        );
    });

    return (
        <Widget {...props}>
            <WidgetHeading heading='Телепрограмма'>
                <WidgetLabel
                    gap='5px' title='play'
                    alignItems='center'
                >
                    <FiPlay size='15px' />
                </WidgetLabel>
            </WidgetHeading>
            {content}
        </Widget>
    );
}
