import styled from "styled-components";

export const WorkHistorySessionTitle = styled.p`
color: #FFFFFF;
color: ${props => props.color};
font-size: 1.2rem;
margin-bottom: 1.25rem;
font-weight: bold;
`
export const WorkHistoryWrapper = styled.div`
position: relative;
`
export const WorkHistoryContainer = styled.div`
z-index: 2;
`
export const WorkHistoryLine = styled.div`
position: absolute;
height: 100%;
width: 5px;
background-color: #20202A;
top: 0;
right: 10px;
z-index: -1;
`
