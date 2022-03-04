import styled from "styled-components";

export const EducationCardContainer = styled.div`
display: flex;
position: relative;
padding: 1.25rem;
/* background-color: #2c2c38; */
background-color: ${props => props.backgroundColor};
width: calc(100% - 40px);
margin-bottom: 1.25rem;
`

export const EducationCardWrapper = styled.div`


/* border: 1px solid #FFFFFF; */
`;
export const EducationCardHeaderContainer= styled.div`
display: flex;
flex-direction: column;
`;
export const EducationCardTitle= styled.p`
font-size: 1.2rem;
/* color: #FFFFFF; */
color: ${props => props.color};
`;
export const EducationCardDateContainer= styled.div`
width: 70%;
background-color: #20202A;
background-color: ${props => props.backgroundColor};
border-radius: 10px;
margin-top: 0.3125rem;
padding: 0.125rem;
display: flex;
align-items: center;
justify-content: center;
`;
export const EducationCardDate= styled.span`
/* color: #67676c; */
color: ${props => props.color};
`;
export const EducationCardBody= styled.p`
/* color: #67676c; */
color: ${props => props.color};
margin-top: 1.5625rem;
`;
export const EducationCardButton= styled.button`
margin-top: 1.25rem;
/* color:  #ffc107; */
color: ${props => props.color};
`;
export const EducationCardIconContainer = styled.div`
display: flex;
position: absolute;
right: -2.2rem;
width: 2.5rem;
align-items: center;
justify-content: space-between;
`