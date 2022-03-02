import styled from "styled-components";

export const TextareaWrapper = styled.div`
  background-color: #24242f;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 150px;
  margin-bottom: 1.25rem;
`;
export const TextareaField = styled.textarea`
  height: 100%;
  background-color: transparent;
  width: 100%;
  border: none;
  color: #ffffff;
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
  height: 100%;
  width: 50px;
  padding-top: 1.25rem;
  text-align: center;
  & > svg {
    height: 1rem;
    width: 1rem;
    fill: #67676c;
  }
`
