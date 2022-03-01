import React from "react";
import Rate from "../rate/Rate";
import {
  RecommendationsBody,
  RecommendationsImage,
  RecommendationsImageAndName,
  RecommendationsImageContainer,
  RecommendationsName,
  RecommendationsRatingContainer,
  RecommendationsWrapper,
} from "./style";

const Recommendations = ({body, author, rating}) => {
  return (
    <RecommendationsWrapper>
      <RecommendationsImageAndName>
        <RecommendationsName>{author}</RecommendationsName>
        <RecommendationsImageContainer>
          <RecommendationsImage src="/assets/images/peteru.jpeg" alt="" />
        </RecommendationsImageContainer>
      </RecommendationsImageAndName>
      <RecommendationsBody>
       {body}
      </RecommendationsBody>
      <RecommendationsRatingContainer>
        <Rate rating={rating} />
      </RecommendationsRatingContainer>
    </RecommendationsWrapper>
  );
};

export default Recommendations;
