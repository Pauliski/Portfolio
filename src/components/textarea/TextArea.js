import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { TextareaField, TextareaIconContainer, TextareaWrapper } from "./style";

const TextArea = ({ icon, value, onChange, name }) => {
  const { cardColor, buttonColor, fontColorOne, background, fontColorTwo } =
    useContext(ThemeContext);
  return (
    <TextareaWrapper backgroundColor={cardColor}>
      <TextareaField
        backgroundColor={background}
        color={fontColorOne}
        buttonColor={buttonColor}
        value={value}
        name={name}
        onChange={(e)=> onChange(e)}
        required
      />
      <TextareaIconContainer backgroundColor={fontColorOne} color={background}>
        {icon}
      </TextareaIconContainer>
    </TextareaWrapper>
  );
};

export default TextArea;
