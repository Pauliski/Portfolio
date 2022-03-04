import styled from "styled-components";

export const TextareaWrapper = styled.div`
  background-color: #24242f;
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 150px;
  margin-bottom: 1.25rem;
`;
export const TextareaField = styled.textarea`
  height: 100%;
  background-color: transparent;
  background-color: ${props => props.backgroundColor};
  width: 100%;
  border: none;
  color: #ffffff;
  color: ${props => props.color};
  padding-left: 10px;
  outline: none;
  font-size: 1.2rem;
  &:focus + div {
    background-color: #ffc107;
    & svg {
      fill: #000;
    }
  }
`;
export const TextareaIconContainer = styled.div`
background-color: #20202a;
background-color: ${props => props.backgroundColor};
  height: 100%;
  width: 50px;
  padding-top: 1.25rem;
  text-align: center;
  & > svg {
    height: 1rem;
    width: 1rem;
    fill: #67676c;
    fill: ${props => props.color};
  }
`
