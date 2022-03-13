import styled from "styled-components";

export const WorkHistorySessionHolder = styled.div`
 @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    flex: 1;
    
    /* width: 50%; */
  }
`

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
& > div{
    z-index: 2;
}

`
export const WorkHistoryLine = styled.div`
position: absolute;
height: 100%;
width: 5px;
background-color: ${props => props.backgroundColor};
/* background-color: red; */
top: 0;
right: 10px;
z-index: 1;
`
