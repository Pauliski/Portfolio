import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Input from "../input/Input";
import { ContactCardWrapper, ContactCardDetails } from "./style";

const ContactCard = ({ data }) => {
  const { cardColor, fontColorOne, fontColorTwo } = useContext(ThemeContext);
  return (
    <ContactCardWrapper backgroundColor={cardColor}>
      {Object.keys(data).map((item, i) => (
        
          <ContactCardDetails color={fontColorOne} colorTwo={fontColorTwo} key={i}>
            <p>{item}</p>
            <p>{data[item]}</p>
          </ContactCardDetails>
        
      ))}
    </ContactCardWrapper>
  );
};

export default ContactCard;
