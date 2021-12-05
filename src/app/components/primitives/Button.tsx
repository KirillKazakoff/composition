import styled from 'styled-components';
import {
    border,
    color,
    compose,
    space,
    typography,
    TypographyProps,
    BorderProps,
    ColorProps,
    ButtonStyleProps,
    SpaceProps,
    layout,
    LayoutProps,
} from 'styled-system';

type DefaultProps = ButtonStyleProps &
BorderProps &
TypographyProps &
ColorProps &
SpaceProps &
LayoutProps;

const Button = styled.button<DefaultProps>`
    ${compose(space, color, typography, border, layout)}
`;

export default Button;
