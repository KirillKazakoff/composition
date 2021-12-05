import React from 'react';
import { WiAlien } from '@react-icons/all-files/wi/WiAlien';
import { Flex } from '../primitives/Flex';
import WeatherWidget from '../lib/Widget/WeatherWidget';
import Favourite from '../lib/Widget/Favourite';
import Map from '../lib/Widget/Map';
import Broadcast from '../lib/Widget/Broadcast';
import TvShow from '../lib/Widget/TvShow';

export default function Footer() {
    return (
        <Flex
            mt={4} pb={4}
            flexWrap='wrap' gap='3%'
            rowGap='30px'
        >
            <WeatherWidget icon={<WiAlien size='50px' />} />
            <Favourite />
            <Map />
            <Broadcast icon={<WiAlien size='20px' />} />
            <TvShow />
        </Flex>
    );
}
