import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { recommendations } from "../../staticData";
import Recommendations from "../recommendations/Recommendations";
import { AllRecommendationHeader, AllRecommendationWrapper } from "./style";

const AllRecommendation = () => {
  const {cardColor, buttonColor, fontColorOne} = useContext(ThemeContext)
  return (
    <>
    <AllRecommendationHeader color={fontColorOne}>Reviews & Ratings</AllRecommendationHeader>
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
