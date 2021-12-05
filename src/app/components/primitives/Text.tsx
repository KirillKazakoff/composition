import styled from 'styled-components';
import { TextProps as TextPropsRebass } from 'rebass/styled-components';

import { space, typography, color } from 'styled-system';

interface TextProps extends TextPropsRebass {}

const Text = styled.span<TextProps>`
    ${space}
    ${typography}
    ${color}
`;

export default Text;
