import styled from "styled-components";

export const GetInTouchSessionTittle = styled.p`
font-size: 1.2rem;
color: #FFFFFF;
color: ${props => props.color};
font-weight: bold;
margin: 1.25rem;
text-align: center;
`
export const GetInTouchWrapper = styled.form`
background-color: #2c2c38;
background-color: ${props => props.backgroundColor};
padding: 1.25rem;
`
export const GetInTouchButton = styled.button`
background-color: ${props => props.backgroundColor};
color: ${props => props.color};
display: flex;
padding: 15px;
font-size: 15px;
border-radius: 
5px;
`