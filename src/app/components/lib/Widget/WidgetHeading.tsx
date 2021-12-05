/* eslint-disable react/require-default-props */
import { IconBaseProps } from '@react-icons/all-files/lib';
import React from 'react';
import { Flex } from '../../primitives/Flex';

import Heading from '../../primitives/Heading';
import Text from '../../primitives/Text';

export type HeadingProps = {
    heading: {
        main: string;
        icon?: IconBaseProps;
        title?: string;
    };
};

export function WidgetHeading({ heading, ...props }: HeadingProps) {
    const { main, icon, title } = heading;

    const label = icon ? (
        <Flex
            bg='tan' p={2}
            gap='15px' borderRadius='5px'
        >
            {icon}
            <Text color='white'>{title}</Text>
        </Flex>
    ) : null;

    return (
        <Flex gap='15px' {...props}>
            <Heading
                color='primary' fontWeight='bold'
                fontSize={3}
            >
                {main}
            </Heading>
            {label}
        </Flex>
    );
}
