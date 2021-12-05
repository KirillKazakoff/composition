import React from 'react';
import favouriteData from '../../../data/favouriteData';
import { Box } from '../../primitives/Box';
import Text from '../../primitives/Text';
import { ListItem, ListItemProps } from './ListItem';
import Widget from './Widget';
import { WidgetHeading } from './WidgetHeading';

export default function Favourite({ icon, ...props }: ListItemProps) {
    const content = favouriteData.map((item) => {
        const { title, description, href } = item;
        return (
            <ListItem href={href} icon={icon}>
                <Box>
                    <Text fontWeight='bold'>{title}</Text>
                    {' '}
                    --
                    {' '}
                    <Text>{description}</Text>
                </Box>
            </ListItem>
        );
    });

    return (
        <Widget {...props}>
            <WidgetHeading heading='Посещаемое' />
            {content}
        </Widget>
    );
}
