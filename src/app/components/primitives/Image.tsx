import { ImageProps } from 'rebass';
import styled from 'styled-components';
import { border, layout, space } from 'styled-system';

const Image = styled.img<ImageProps>`
    ${border}
    ${space}
    ${layout}
`;

export default Image;
