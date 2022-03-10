import styled from 'styled-components'

export const NavbarLinkWrapper = styled.ul`
&  li{
    margin-right: 1.25rem;
    text-transform: uppercase;
    color: ${props => props.color};
    line-height: 1.5;
    /* border: 1px solid yellow; */
    margin-bottom: 1.25rem;
    @media only screen and (min-width: 768px) {
        margin-bottom: 0;
    }
}
`