import React from 'react';
import { Flex, FlexProps } from '../../primitives/Flex';

type WidgetProps = {
    children: React.ReactNode;
} & FlexProps;

export default function Widget({ children, ...props }: WidgetProps) {
    return (
        <Flex
            flexDirection='column'
            gap='10px'
            width='31%'
            p='1%'
            border='primary'
            {...props}
        >
            {children}
        </Flex>
    );
}
