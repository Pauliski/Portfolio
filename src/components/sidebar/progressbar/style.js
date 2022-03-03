import styled from "styled-components";

export const ProgressBarWrapper = styled.div`
  margin-bottom: 1.25rem;
`;
export const ProgressBarContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #191923;
  height: 0.25rem;
  &::before {
    content: '';
    position: absolute;
    /* background-color: #ffc107; */
    background-color: ${props => props.buttonColor};
    top: 0;
    bottom: 0;
    height: 100%;
    ${(props) => props.level ? `width: ${props.level}%;`: ""}
  }
`;
export const ProgressBarTextContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 0.3125rem;
& > p :nth-child(1) {
    /* color: #ffffff; */
    color: ${props => props.fontColorOne};
  }
  & > p :nth-child(2) {
    /* color: #77777a; */
    color: ${props => props.fontColorTwo};
  }
`
