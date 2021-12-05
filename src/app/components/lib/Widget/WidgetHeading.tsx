/* eslint-disable react/require-default-props */
import React from 'react';
import { Flex } from '../../primitives/Flex';

import Heading from '../../primitives/Heading';

export type HeadingProps = {
    heading: string;
    children?: React.ReactNode;
};

export function WidgetHeading({ heading, children, ...props }: HeadingProps) {
    return (
        <Flex
            gap='15px' {...props}
            alignItems='center'
        >
            <Heading
                color='primary' fontWeight='bold'
                fontSize={3} pb={2}
            >
                {heading}
            </Heading>
            {children}
        </Flex>
    );
}
