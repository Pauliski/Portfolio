import styled from "styled-components";

export const NavbarLinkListContainer = styled.div`
  position: absolute;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 7;
  padding: 1.25rem;
  width: 18.125rem;
  background-color: ${props => props.backgroundColor};
  display: ${props => props.menuIsOpen ? 'flex' : 'none'};
  flex-direction: column;
  &  svg {
    height: 20px;
    @media only screen and (min-width: 768px) {
    display: none;
  }
 
  }
  @media only screen and (min-width: 768px) {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;

  }
`;

export const NavbarLinkWrapper = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
  & li {
    margin-right: 1.25rem;
    text-transform: uppercase;
    color: ${(props) => props.color};
    line-height: 1.5;
    /* border: 1px solid yellow; */
    margin-bottom: 1.25rem;
    @media only screen and (min-width: 768px) {
        margin-bottom: 0;
    }
    
  }
 
  @media only screen and (min-width: 768px) {
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    
  }
`;
export const NavbarLinkButton = styled.ul`
  & > svg{
      fill: ${props => props.color};
  }
`;