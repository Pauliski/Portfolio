import styled from "styled-components";

export const AllRecommendationWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
   
  }
`;
export const AllRecommendationHeader = styled.p`
/* color: #FFFFFF; */
color: ${props =>props.color};
font-size: 1.2rem;
font-weight: bold;
margin: 1.25rem 0;
`
