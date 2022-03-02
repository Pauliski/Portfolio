import styled from "styled-components";

export const RecommendationsWrapper = styled.div`
background-color: #2C2C36;
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
color: #FFFFFF;
`
export const RecommendationsBody = styled.p`
color: #67676c;
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
background-color: #202029;
border-radius: 10px;
width: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 1.25rem;
`