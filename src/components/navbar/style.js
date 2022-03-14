import styled from "styled-components";

export const NavbarWrapper = styled.div`
  /* background-color: #20202a; */
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0.625rem; */
  height: 5rem;
  padding: 1.25rem;
  @media only screen and (min-width: 768px) {
    position: sticky;
    top: 0;
    z-index: 3;
  }
`;
export const NavbarSideMenuToggler = styled.button`
  height: 20px;
  width: 20px;

  & > svg {
    width: 100%;
    height: 100%;
    fill: ${(props) => props.color};
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
export const NavbarName = styled.p`
  color: #8c8c8e;
  word-spacing: 0.5rem;
`;
export const NavbarSidebarToggler = styled.button`
  height: 20px;
  /* width: 20px; */
  display: flex;
  display: ${(props) => (props.displaySidebar ? "none" : "block")};
  @media only screen and (min-width: 768px) {
    display: none;
  }
  & > svg {
    width: 100%;
    height: 100%;
    fill: ${props => props.color};
  }
`;
export const NavbarTogglers = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
  & svg {
    width: 20px;
    height: 20px;
    fill: ${(props) => props.color};
  }
`;
export const NavbarTogglersIconContainer = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`;
export const NavbarAllLink = styled.div`
  /* display: ${(props) => (props.menuIsOpen ? "block" : "none")}; */
  /* position: absolute; */
  @media only screen and (min-width: 768px) {
    display: flex;
    width: 70%;
    & > ul {
      display: flex;
      align-items: center;
    }
  }
`;
export const NavbarAllLinkMobile = styled.div`
  height: 100vh;
  position: absolute;
  background-color: ${(props) => props.backgroundColor};
  /* background-color: blue; */
  display: block;
  width: 300px;
  z-index: 5;
  top: 0;
  right: ${(props) => (props.menuIsOpen ? 0 : "100%")};
  animation-name: example;
  animation-duration: 4s;
  /* transition: all .3s ease-out; */
  /* transition-timing-function: linear; */
  & svg {
    width: 20px;
    height: 20px;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
export const NavbarCloseMenuButton = styled.button`
  height: 5rem;
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  padding: 1.25rem;
  text-align: left;
  & > svg {
    fill: ${(props) => props.color};
  }
`;
export const NavbarMenuContainer = styled.div`
  height: calc(100% - 5rem);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;
