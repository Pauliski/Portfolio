import styled from "styled-components";
export const HeroContainer = styled.div`
background-color: #2d2a35;
/* padding: 20px; */
`
export const HeroWrapper = styled.div`
  
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-image: url("/assets/images/wall.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
 

  /* padding: 3.125rem 0 0; */
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
`;

export const HeroSectionOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  width: 100%;
  height: 100%;
`;
export const HeroBackgroundImage = styled.img`
  height: 100%;
`;
export const HeroFirstSection = styled.div`
  padding: 1.25rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const HeroImage = styled.div`
 display: none;
  @media only screen and (min-width: 950px) {
    display: block;
    z-index: 2;
  }
`;
