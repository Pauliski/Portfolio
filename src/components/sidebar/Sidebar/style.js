import styled from "styled-components";

export const SidebarWrapper = styled.div`
  /* background-color: #20202a; */
  background-color: ${(props) => props.backgroundColor};
  /* height: 100%; */
  width: 18.125rem;
  z-index: 3;
height: 100vh;
  /* overflow-y: scroll; */
  top: 0;
  left: ${(props) => (props.displaySidebar ? 0 : "-100%")};
  position: absolute;
  transition: left 0.3s ease-out;
  @media only screen and (min-width: 768px) {
    left: 0;
    top: 60px;
    position: sticky;
    height: calc(100vh - 1rem);
    height: 100%;
  }
`;
export const SidebarSecondSection = styled.div`
  height: calc(100vh - 16.875rem - 4.5rem);
  padding: 1.875rem;
  overflow-y: scroll;

  & ::-webkit-scrollbar {
    width: 5px;
  }
  & ::-webkit-scrollbar-track {
    border-radius: 10px;
    /* background-color: #f5f5f5; */
    background-color: ${(props) => props.color};
  }
  & ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    /* background-color: #ffc107; */
    background-color: ${(props) => props.backgroundColor};
  }
`;
