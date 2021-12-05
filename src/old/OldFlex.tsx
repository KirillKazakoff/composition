import styled from 'styled-components';
import { border, BorderProps } from 'styled-system';
import { FlexProps as RebassFlexProps } from 'rebass';

import { Flex as FlexWrapper } from 'rebass/styled-components';

export interface FlexProps extends RebassFlexProps, BorderProps {
    'gap'?: string;
    'data-id'?: string;
}

export const Flex = styled(FlexWrapper)<FlexProps>`
    gap: ${({ gap }) => gap || ''};
    ${border};
`;

Flex.defaultProps = {
    'data-id': 'Flex',
};
