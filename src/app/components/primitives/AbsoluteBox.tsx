import styled from 'styled-components';
import { Box, BoxProps } from './Box';

const AbsoluteBox = styled(Box)<BoxProps>`
    position: absolute;
`;

AbsoluteBox.defaultProps = {
    left: 0,
    top: 0,
};

export default AbsoluteBox;
