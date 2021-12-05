import React from 'react';
import { IconBaseProps } from '@react-icons/all-files/lib';
import { nanoid } from 'nanoid';
import { Flex, FlexProps } from '../../primitives/Flex';
import Link from '../../primitives/Link';

export type ListItemProps = {
    icon?: IconBaseProps;
} & FlexProps;

export function ListItem({
    icon, children, href, ...props
}: ListItemProps) {
    const content = (
        <Flex
            gap='15px' alignItems='center'
            {...props}
        >
            {icon || null}
            {children}
        </Flex>
    );

    if (href) return <Link href={href}>{content}</Link>;
    return content;
}

export const listItemDefault = { icon: null };

ListItem.defaultProps = listItemDefault;
