import styled from 'styled-components';
import {
    border, space, layout, fontSize, color, BorderProps,
} from 'styled-system';
import { InputProps as InputPropsRebass } from '@rebass/forms';

interface InputProps extends InputPropsRebass, BorderProps {}

const Input = styled.input<InputProps>`
    ${border}
    ${space}
    ${layout}
    ${fontSize}
    ${color}
`;

export default Input;
