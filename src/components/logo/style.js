import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    border-bottom: 2px solid ${props => props.color};
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  background-color: ${props => props.backgroundColor};
  height: 3rem;
  width: 2.8rem;
  color: ${props => props.color};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-right: 3px;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
`;
export const LogoNameTag = styled.p`
  font-size: 1.5rem;
  color: ${props => props.color};
`;
