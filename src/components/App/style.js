import styled from "styled-components";

export const AppWrapper = styled.div`
  /* width: 100vw; */
`;
export const AppSecondSectionContaner = styled.div`
  /* position: relative; */
  display: flex;
  /* padding: 50px; */
`;
export const AppSecondSection = styled.div`
  /* position: relative; */
  display: flex;
  width: 100%;
  background-color: #2d2a35;
  /* background-color: rgba(30, 30, 40, 0.88); */
  background-color: ${props => props.backgroundColor};
  padding: 1.25rem;
`;
export const AppHeroSection = styled.div`
  width: 100%;
  height: 100%;
`;
