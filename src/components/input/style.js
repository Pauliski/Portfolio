import styled from "styled-components";

export const InputWrapper = styled.div`
  background-color: #24242f;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 50px;
  margin-bottom: 1.25rem;
`;
export const InputIconContainer = styled.div`
  background-color: #20202a;
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    height: 1rem;
    width: 1rem;
    fill: #67676c;
  }
`;
export const InputField = styled.input`
  height: 100%;
  background-color: transparent;
  width: 100%;
  border: none;
  color: #ffffff;
  padding-left: 10px;
  outline: none;
  font-size: 1.2rem;
  &:focus  + div{
    background-color: #ffc107;
    & svg{
        fill: #000;
    }
    
  }
`;
