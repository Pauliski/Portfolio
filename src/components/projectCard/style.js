import styled from "styled-components";

export const ProjectCardWrapper = styled.div`
  background-color: ${(props) => props.backgroundColor};
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (min-width: 1030px) {
    width: 48%;
  }
  @media only screen and (min-width: 1300px) {
    width: 33%;
  }
`;
export const ProjectCardContainer = styled.div`
  padding: 1.25rem;
  position: relative;
`;
export const ProjectCardTitle = styled.h2`
  margin-bottom: 1.25rem;
  color: ${props => props.color};
`;
export const ProjectCardBottom = styled.div`

bottom: 0;
& > div :nth-child(1){
  color: ${props => props.color};
}
`;
export const ProjectCardButtonContainer = styled.div`
  display: flex;
  padding: 1.25rem;
  width: 95%;
  justify-content: space-between;
  
  
`;
export const ProjectCardButton = styled.button`
  display: flex;
  align-items: center;
  /* height: 80px; */
  position: relative;
  color: ${props => props.color};
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 100%;
    border-bottom: 2px solid ${props => props.colorTwo};
    transition: right 0.3s ease-out;
  }
  &:hover {
    &::before {
      right: 0;
    }
  }
  & > svg {
    display: inline;
    width: 1.25rem;
    height: 1.25rem;
    fill: ${props => props.color};
  }
`;
export const ProjectCardAbout = styled.p`
color: ${props => props.color};
`
