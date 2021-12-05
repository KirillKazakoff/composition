import React from 'react';
import Text from '../../primitives/Text';
import { ListItem, ListItemProps } from './ListItem';
import Widget from './Widget';
import { WidgetHeading } from './WidgetHeading';

export default function Map({ ...props }: ListItemProps) {
    return (
        <Widget {...props}>
            <WidgetHeading heading='Карта Германии' />
            <ListItem href='/#'>
                <Text>Расписания</Text>
            </ListItem>
        </Widget>
    );
}
