import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import User from "../../../public/assets/icons/User";
import { InputField, InputIconContainer, InputWrapper } from "./style";

const Input = ({ icon, type, value, onChange, name }) => {
  const { cardColor, buttonColor, fontColorOne, background, fontColorTwo } =
    useContext(ThemeContext);
  return (
    <InputWrapper backgroundColor={cardColor}>
      <InputField
        backgroundColor={background}
        color={fontColorOne}
        buttonColor={buttonColor}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
        required
      />
      <InputIconContainer backgroundColor={fontColorOne} color={background}>
        {icon}
      </InputIconContainer>
    </InputWrapper>
  );
};

export default Input;
