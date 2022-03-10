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
  background-color: ${props => props.backgroundColor};
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
  color: ${props => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
export const HeroSmallText = styled.p`
 margin-bottom: .5rem;
 font-style: italic;
 font-weight: bold;
  @media only screen and (min-width: 950px) {
    
  }
`;
export const HeroBigText = styled.h2`
 margin-bottom: .5rem;
 font-style: normal;
 font-weight: bold;
  @media only screen and (min-width: 950px) {
    
  }
`;
export const HeroImage = styled.div`
 display: none;
  @media only screen and (min-width: 950px) {
    display: block;
    z-index: 2;
  }
`;
export const FirstButton = styled.button`
background-color: ${props => props.backgroundColor};
padding: .5rem;
border-radius: 5px;
margin-right: 1.25rem;
`
export const SecondButton = styled.button`
background-color: ${props => props.backgroundColor};
color: ${props => props.color};
padding: .5rem;
border-radius: 5px;
margin-right: 1.25rem;
`
export const ButtonContainer = styled.div`
margin: 1.25rem 0;
`
