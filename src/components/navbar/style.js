import styled from "styled-components";

export const NavbarWrapper = styled.div`
  /* background-color: #20202a; */
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem;
  height: 5rem;
  @media only screen and (min-width: 768px) {
    padding: 1.25rem;
    position: sticky;
    top: 0;
    z-index: 4;
  }
`;
export const NavbarSideMenuToggler = styled.button`
  height: 20px;
  width: 20px;
  
  & > svg {
    width: 100%;
    height: 100%;
    fill: #8c8c8e;
  }
`;
export const NavbarName = styled.p`
  color: #8c8c8e;
  word-spacing: 0.5rem;
`;
export const NavbarSidebarToggler = styled.button`
  height: 20px;
  width: 20px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
  & > svg {
    width: 100%;
    height: 100%;
    fill: #8c8c8e;
  }
`;
export const NavbarTogglers = styled.div`
display: flex;
`
