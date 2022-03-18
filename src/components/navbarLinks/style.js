import styled, {Keyframes} from "styled-components";
import { keyframes } from "styled-components";

const transKeyframe = keyframes`
0%{
        transform: translateX(120px);
    },
    100%{
      transform: translateX(0);
    }
`;


export const NavbarLinkListContainer = styled.div`
  position: absolute;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 7;
  padding: 1.25rem;
  width: 18.125rem;
  background-color: ${(props) => props.backgroundColor};
  display: ${(props) => (props.menuIsOpen ? "flex" : "none")};
  flex-direction: column;
  & svg {
    height: 20px;
    @media only screen and (min-width: 768px) {
      display: none;
    }
  }
  @media only screen and (min-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 0;
  }
`;

export const NavbarLinkWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  & > li {
    margin-right: 1.25rem;
    text-transform: uppercase;
    
    line-height: 1.5;
    margin-bottom: 1.25rem;
    animation-name: ${(props) => (props.menuIsOpen ? transKeyframe : '')};
    & > a{
      color: ${(props) => props.color};
    }
    @media only screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }


  & > li:nth-child(1) {
    animation-duration: 1s;
  }
  & > li:nth-child(2) {
    animation-duration: 1.2s;
  }
  & > li:nth-child(3) {
    animation-duration: 1.4s;
  }
  & > li:nth-child(4) {
    animation-duration: 1.6s;
  }

  @media only screen and (min-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
  }
`;
export const NavbarLinkButton = styled.ul`
  & > svg {
    fill: ${(props) => props.color};
  }
`;
