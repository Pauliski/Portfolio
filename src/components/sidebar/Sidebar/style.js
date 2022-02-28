import styled from "styled-components";

export const SidebarWrapper = styled.div`
  background-color: #20202a;
  height: 100vh;
  width: 18.125rem;
  
  /* overflow-y: scroll; */
  top: 0;
  left: ${(props) => (props.displaySidebar ? 0 : "-100%")};
  position: absolute;
  transition: left 0.3s ease-out;
`;
export const SidebarSecondSection = styled.div`
  height: calc(100vh - 16.875rem - 2.5rem);
  padding: 1.875rem;
  overflow-y: scroll;

  & ::-webkit-scrollbar {
    width: 2px;
    background-color: blue;
    display: none;
  }
`;
