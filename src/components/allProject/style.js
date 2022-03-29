import styled from 'styled-components';

export const AllProjectWrapper = styled.div`
display: flex;
flex-direction: column;
@media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export const AllProjectHeader = styled.p`
font-size: 1.2rem;
/* color: #FFF; */
color: ${props => props.color};
margin: 1.5rem 0;
font-weight: bold;
`