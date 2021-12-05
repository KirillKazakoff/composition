import React from 'react';
import favouriteData from '../../../data/favouriteData';
import Text from '../../primitives/Text';
import { ListItem, ListItemProps } from './ListItem';
import Widget from './Widget';

export default function Favourite({ icon, ...props }: ListItemProps) {
    const content = favouriteData.map((item) => {
        const { title, description, href } = item;
        return (
            <ListItem href={href} icon={icon}>
                <Text fontWeight='bold'>{title}</Text>
                {' '}
                --
                {' '}
                <Text>{description}</Text>
            </ListItem>
        );
    });

    return (
        <Widget {...props} heading={{ main: 'Посещаемое' }}>
            {content}
        </Widget>
    );
}

// Favourite.defaultProps = {
//     icon:
// }
