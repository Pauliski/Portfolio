import styled from "styled-components";

export const RecommendationsWrapper = styled.div`
background-color: #2C2C36;
background-color: ${props=>props.backgroundColor};
/* border: 1px solid #FFF; */
padding: 1.25rem;
position: relative;
margin-bottom: 1.25rem;
@media only screen and (min-width: 1030px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 48%;
    margin-top: 1.25rem;

  }
  @media only screen and (min-width: 1300px) {
    width: 33%;
   

  }
`
export const RecommendationsName = styled.p`
/* color: #FFFFFF; */
color: ${props => props.color};
`
export const RecommendationsBody = styled.p`
/* color: #67676c; */
color: ${props => props.color};
`
export const RecommendationsImageContainer = styled.div`
height: 70px;
width: 70px;
position: absolute;
top: -20px;
right: 20px;
/* top: -10px; */

`
export const RecommendationsImage = styled.img`
height: 100%;
width: 100%;
border-radius: 50%;
/* object-fit: contain; */
`
export const RecommendationsImageAndName = styled.div`
display: flex;
/* align-items: center; */
justify-content: space-between;
margin-bottom: 1.25rem;
`
export const RecommendationsRatingContainer = styled.div`
/* background-color: #202029; */
background-color: ${props => props.backgroundColor};
border-radius: 10px;
width: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 1.25rem;
`