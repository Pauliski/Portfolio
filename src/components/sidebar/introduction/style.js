import styled from "styled-components";

export const IntroductionWrapper = styled.div`
  /* background-color: #24242f; */
  background-color: ${props => props.backgroundColor};
  height: 16.875rem;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 3.125rem 1.875rem;
`;
export const IntroductionDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 16.25rem;
  position: relative;
 
`;
export const IntroductionSvgContainer = styled.button`
  position: absolute;
  right: 0.125rem;
  height: 20px;
  & > svg {
  height: 100%;
  /* fill: #8c8c8e; */
  fill: ${props => props.fill};
  }
 
`;
export const IntroductionImageContainer = styled.div`
  width: 5.625rem;
  height: 5.625rem;
  position: relative;
`;
export const IntroductionActiveStatus = styled.span`
  position: absolute;
  bottom: 10%;
  right: 2%;
  background-color: #ffc107;
  background-color: ${props => props.backgroundColor};
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 50%;
`;
export const IntroductionImage = styled.img`
  border-radius: 50%;
  object-position: center;
`;
export const IntroductionName = styled.h3`
  /* color: #ffffff; */
  color: ${props => props.fontColor};
  word-spacing: 0.5rem;
`;
export const IntroductionProfession = styled.p`
  /* color: #ffffff; */
  color: ${props => props.fontColor};
  margin-top: 0.625rem;
`;
