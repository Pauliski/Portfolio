import styled from "styled-components";

export const RotateSquareWrapper = styled.div`
background-color: #2c2c38;
background-color: ${props => props.backgroundColor};
height: 0.625rem;
width: 0.625rem;
transform: rotate(-135deg);
`