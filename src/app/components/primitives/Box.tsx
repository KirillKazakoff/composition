/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
    border,
    space,
    layout,
    fontSize,
    color,
    BorderProps,
    position,
    PositionProps,
    compose,
} from 'styled-system';
import { BoxProps as BoxPropsRebass } from 'rebass/styled-components';

export type BoxProps = BoxPropsRebass & BorderProps & PositionProps;

export const Box = styled.div<BoxProps>`
    ${compose(border, space, layout, fontSize, color, position)}
`;
