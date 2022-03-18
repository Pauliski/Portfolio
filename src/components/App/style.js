import styled from "styled-components";

export const AppWrapper = styled.div`
  /* width: 100vw; */
`;
export const AppSecondSectionContaner = styled.div`
  /* position: relative; */
  display: flex;
  
  /* padding: 50px; */
`;
export const AppNavbarContainer = styled.div`
position: sticky;
top: 0;
z-index: 3;
@media (min-width: 768px) {
        /* position: relative; */
}
`
export const AppSecondSection = styled.div`
  /* position: relative; */
  display: flex;
  width: 100%;
  background-color: #2d2a35;
  /* background-color: rgba(30, 30, 40, 0.88); */
  background-color: ${(props) => props.backgroundColor};
  padding: 1.25rem;
  padding-bottom: 0;
`;
export const AppHeroSection = styled.div`
  width: 100%;
  height: 100%;
`;
export const AppOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  top: 0;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  display: ${props => props.displaySidebar || props.menuIsOpen ? 'block' : 'none'};
  z-index: 4;
  @media (min-width: 960px) {
        display: none;
    }
`;
export const AppNavLinkContainer = styled.div`
background-color: ${props => props.backgroundColor};

@media (min-width: 768px) {
        display: none;
    }
`
