import styled from 'styled-components';
import Text from '../primitives/Text';

const Filter = styled(Text)<{ active: boolean | null }>`
    cursor: pointer;
    ${({ theme, active }) => ({
        color: active ? theme.filters.colors.primary : theme.filters.colors.secondary,
        border: active ? theme.borders.primary : theme.borders.secondary,
        padding: active ? theme.space[3] : theme.space[2],
    })};
`;

export default Filter;
