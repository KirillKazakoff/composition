/* eslint-disable react/require-default-props */
import React from 'react';
import { Flex, FlexProps } from '../../primitives/Flex';

import Input from '../../primitives/Input';
import Image from '../../primitives/Image';

const SearchBar = ({ ...props }: FlexProps) => {
    return (
        <Flex width='100%' {...props}>
            <Input
                p='10px' width='95%'
                fontSize='25px' color='primary'
            />
            <Image src='./img/keyboard.png' />
        </Flex>
    );
};

export default SearchBar;
