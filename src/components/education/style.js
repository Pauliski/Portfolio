import styled from "styled-components";

export const EducationSessionTitle = styled.p`
  color: #ffffff;
  color: ${props => props.color};
  font-size: 1.2rem;
  margin-bottom: 1.25rem;
  font-weight: bold;
`;
export const EducationWrapper = styled.div`
  position: relative;

  @media only screen and (min-width: 1030px) {
    margin-right: 1.25rem;
  }
`;
export const EducationContainer = styled.div`
  z-index: 2;
`;
export const EducationLine = styled.div`
  position: absolute;
  height: 100%;
  width: 5px;
  background-color: #20202a;
  top: 0;
  right: 10px;
  z-index: -1;
`;
