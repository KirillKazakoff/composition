import styled from 'styled-components';
import {
    color, compose, space, typography,
} from 'styled-system';

const MyBox = styled('div')`
    ${compose(typography, color, space)}
`;

export default MyBox;
