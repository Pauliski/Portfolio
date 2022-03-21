import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
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

const Recommendations = ({body, author, rating, src}) => {
  const {cardColor, buttonColor, fontColorOne, fontColorTwo, background} = useContext(ThemeContext)
  return (
    <RecommendationsWrapper backgroundColor={cardColor}>
      <RecommendationsImageAndName>
        <RecommendationsName color={fontColorOne}>{author}</RecommendationsName>
        <RecommendationsImageContainer>
          <RecommendationsImage src={src} />
        </RecommendationsImageContainer>
      </RecommendationsImageAndName>
      <RecommendationsBody color={fontColorTwo}>
       {body}
      </RecommendationsBody>
      <RecommendationsRatingContainer backgroundColor={background}>
        <Rate rating={rating} />
      </RecommendationsRatingContainer>
    </RecommendationsWrapper>
  );
};

export default Recommendations;
