import styled from 'styled-components'

export const NavbarLinkWrapper = styled.ul`
&  li{
    margin-right: 1.25rem;
    text-transform: uppercase;
    color: ${props => props.color};
}
`