import React from 'react';
import { Box } from '../primitives/primitives';
import Search from '../lib/Search/Search';
import AbsoluteBox from '../primitives/AbsoluteBox';
import Image from '../primitives/Image';

export default function Main() {
    return (
        <Box position='relative'>
            <AbsoluteBox left='-100px' top='70px'>
                <Image src='./img/Legooo.png' size='80px' />
            </AbsoluteBox>
            <Search mb='20px' />
            <Image
                src='./img/add.png' width='50%'
                mx='auto'
            />
        </Box>
    );
}
