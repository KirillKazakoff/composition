import React from 'react';
import { IconBaseProps } from '@react-icons/all-files/lib';
import { Flex, FlexProps } from '../../primitives/Flex';
import Text from '../../primitives/Text';

type WidgetLabelProps = {
    children: IconBaseProps;
    title: string;
} & FlexProps;

export default function WidgetLabel({ children, title, ...props }: WidgetLabelProps) {
    return (
        <Flex
            bg='tan' p={2}
            gap='15px' borderRadius='5px'
            {...props}
        >
            {children}
            <Text color='white'>{title}</Text>
        </Flex>
    );
}
