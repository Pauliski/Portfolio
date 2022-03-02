import React from "react";
import User from "../../../public/assets/icons/User";
import { InputField, InputIconContainer, InputWrapper } from "./style";

const Input = ({icon}) => {
  return (
    <InputWrapper>
      <InputField type="text" required/>
      <InputIconContainer>
        {icon}
      </InputIconContainer>
    </InputWrapper>
  );
};

export default Input;
