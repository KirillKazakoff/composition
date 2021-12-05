import React from 'react';

import {
    compose,
    space,
    layout,
    color,
    typography,
    flexbox,
    border,
    BorderProps,
} from 'styled-system';

import { FlexProps as FlexPropsRebass } from 'rebass';
import styled from 'styled-components';

export type FlexProps = FlexPropsRebass &
BorderProps & {
    gap?: string;
    rowGap?: string;
    as?: React.ElementType;
};

export const Flex = styled.div<FlexProps>`
    ${compose(space, layout, color, typography, flexbox, border)};
    gap: ${({ gap }) => gap || ''};
    row-gap: ${({ rowGap }) => rowGap || ''};
    display: flex;
`;
