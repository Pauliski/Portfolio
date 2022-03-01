import React from "react";
import { recommendations } from "../../staticData";
import Recommendations from "../recommendations/Recommendations";
import { AllRecommendationHeader, AllRecommendationWrapper } from "./style";

const AllRecommendation = () => {
  return (
    <>
    <AllRecommendationHeader>Recommendation</AllRecommendationHeader>
    <AllRecommendationWrapper>
      {recommendations.map((item, i) => (
        <Recommendations
        key={i}
          body={item.body}
          author={item.author}
          rating={item.rating}
        />
      ))}
    </AllRecommendationWrapper>
    </>
    
  );
};

export default AllRecommendation;
