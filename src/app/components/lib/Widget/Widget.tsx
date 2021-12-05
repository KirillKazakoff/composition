import React from 'react';
import { Flex, FlexProps } from '../../primitives/Flex';
import { HeadingProps, WidgetHeading } from './WidgetHeading';

type WidgetProps = {
    children: React.ReactNode;
} & FlexProps &
HeadingProps;

export default function Widget({ heading, children, ...props }: WidgetProps) {
    return (
        <Flex
            flexDirection='column' gap='10px'
            {...props}
        >
            <WidgetHeading heading={heading} />
            {children}
        </Flex>
    );
}
