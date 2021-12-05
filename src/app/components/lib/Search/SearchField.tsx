import styled from 'styled-components';
import Text from '../../primitives/Text';

const SearchField = styled(Text)<{ cursor: string }>`
    cursor: ${({ cursor }) => cursor};
`;

export default SearchField;
