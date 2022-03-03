import styled from "styled-components";

export const AllServiceCardWrapper = styled.div`
display: flex;
flex-direction: column;
@media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
export const AllServiceCardHeader = styled.p`
font-size: 1.2rem;
/* color: #FFF; */
color: ${props => props.color};
margin: 1.5rem 0;
font-weight: bold;
`