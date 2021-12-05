import styled from 'styled-components';
import { HeadingProps as HeadingPropsRebass } from 'rebass';

import { space, typography, color } from 'styled-system';

interface HeadingProps extends HeadingPropsRebass {}

const Heading = styled.h2<HeadingProps>`
    ${space}
    ${typography}
    ${color}
`;

export default Heading;
