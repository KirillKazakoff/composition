import React from 'react';
import Text from '../../primitives/Text';
import { ListItem, ListItemProps } from './ListItem';
import Widget from './Widget';

export default function Map({ ...props }: ListItemProps) {
    return (
        <Widget heading={{ main: 'Карта Германии' }} {...props}>
            <ListItem href='/#'>
                <Text>Расписания</Text>
            </ListItem>
        </Widget>
    );
}
