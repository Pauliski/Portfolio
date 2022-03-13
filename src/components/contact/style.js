import styled from "styled-components";

export const ContactWrapper = styled.div`
padding: 1.25rem 0;
display: flex;
flex-direction: column;
@media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
export const ContactSessionTitle = styled.div`
font-size: 1.2rem;
color: #FFFFFF;
color: ${props => props.color};
font-weight: bold;
margin: 1.25rem;
text-align: center;
`