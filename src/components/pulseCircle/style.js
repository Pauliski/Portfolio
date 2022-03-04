import styled, { keyframes } from "styled-components";

const pulse = keyframes`
0%{
    transform: scale(0.6);
    opacity: 1;
    },
    100%{
        transform: scale(1);
    opacity: 0;
    }
`;

export const PulseCircleWrapper = styled.div`
  width: 0.9375rem;
  height: 0.9375rem;
  border-radius: 50%;
  /* border: 0.1875rem solid #ffc107; */
  border: 0.1875rem solid ${props => props.borderColor};
  /* background-color: #2c2c38; */
  background-color: ${props => props.backgroundColor};
  animation: ${pulse} 1s infinite;
`;

