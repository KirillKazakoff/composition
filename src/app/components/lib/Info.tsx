import React from 'react';
import { InfoDataType } from '../../data/infoData';

import {
    Flex, FlexProps, Heading, Text, Image,
} from '../primitives/primitives';

interface InfoProps extends FlexProps {
    contentData: InfoDataType;
}

const Info: React.FC<InfoProps> = ({ contentData, ...props }) => {
    const { img, title, text } = contentData;
    return (
        <Flex
            {...props} flexDirection='column'
            border='primary' p='5px'
            gap='10px'
        >
            <Image
                width='30%' src={img}
                alt='info'
            />
            <Heading as='h2' color='primary'>
                {title}
            </Heading>
            <Text>{text}</Text>
        </Flex>
    );
};

export default Info;
