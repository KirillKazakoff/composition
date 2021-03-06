import { LinkProps as LinkPropsRebass } from 'rebass';
import styled from 'styled-components';

type LinkProps = {
    textDecoration?: string;
    cursor?: string;
} & LinkPropsRebass;

const Link = styled.a<LinkProps>`
    ${({ textDecoration, cursor }) => ({
        cursor,
        textDecoration,
    })}
`;

Link.defaultProps = {
    textDecoration: 'none',
    cursor: 'pointer',
};

export default Link;
/* text-decoration: ${({ textDecoration }) => textDecoration}; */
