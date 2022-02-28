import styled from "styled-components";

export const NavbarWrapper = styled.div`
  background-color: #20202a;
  display: flex;
  justify-content: space-between;
  padding: 0.625rem;
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
export const NavbarName =styled.p`
color: #8c8c8e;
word-spacing: 0.5rem;
`
export const NavbarSidebarToggler = styled.button`
  height: 20px;
  width: 20px;
  & > svg {
    width: 100%;
    height: 100%;
    fill: #8c8c8e;
  }
`;
