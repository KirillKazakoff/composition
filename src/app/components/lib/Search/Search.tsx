import React from 'react';
import {
    Flex, FlexProps, Text, Box,
} from '../../primitives/primitives';
import SearchNav from './SearchNav';
import SearchBar from './SearchBar';
import Button from '../../primitives/Button';

export default function Search(props: FlexProps) {
    return (
        <Flex
            flexWrap='wrap' as='form'
            gap='5px' {...props}
        >
            <SearchNav
                p='15px' mt='30px'
                gap='20px' width='100%'
            />
            <SearchBar width='90%' border='secondary' />
            <Button
                fontSize='20px' bg='secondary'
                p='10px' type='submit'
                width='9%'
            >
                Найти
            </Button>
            <Box fontSize='20px'>
                <Text>Найдется все, например: </Text>
                <Text color='hint'>фаза пожилой луны сегодня</Text>
            </Box>
        </Flex>
    );
}
