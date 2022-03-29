import styled from 'styled-components'

export const FooterWrapper = styled.footer`
margin-top: 1.25rem;
padding: 1.25rem;
/* height: 2.5rem; */
align-items: center;
display: flex;
background-color: ${props => props.backgroundColor};
color: ${props => props.color};
justify-content: center;
font-size: 1.2rem;
& > svg{
    width: 20px;
    height: 20px;
    fill: ${props => props.color};
    margin-right: 0.625rem;
}
`