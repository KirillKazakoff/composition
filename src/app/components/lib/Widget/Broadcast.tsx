import React from 'react';
import broadcastData from '../../../data/broadcastData';
import Text from '../../primitives/Text';
import { ListItem, ListItemProps } from './ListItem';
import Widget from './Widget';
import { WidgetHeading } from './WidgetHeading';

export default function Broadcast({ icon, ...props }: ListItemProps) {
    const content = broadcastData.map((item) => {
        const { chanel, title, href } = item;
        return (
            <ListItem icon={icon} href={href}>
                <Text fontWeight='bold'>{title}</Text>
                <Text color='hint'>{chanel}</Text>
            </ListItem>
        );
    });
    return (
        <Widget {...props}>
            <WidgetHeading heading='Эфир' />
            {content}
        </Widget>
    );
}
