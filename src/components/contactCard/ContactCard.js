import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Input from "../input/Input";
import { ContactCardWrapper, ContactCardDetails } from "./style";

const ContactCard = ({ data }) => {
  const { cardColor, fontColorOne, fontColorTwo } = useContext(ThemeContext);
  return (
    <ContactCardWrapper backgroundColor={cardColor}>
      {Object.keys(data).map((item, i) => (
        <>
          <ContactCardDetails color={fontColorOne} colorTwo={fontColorTwo}>
            <p>{item}</p>
            <p>{data[item]}</p>
          </ContactCardDetails>
          {/* <ContactCardDetails color={fontColorOne} colorTwo={fontColorTwo}>
            <p>City</p>
            <p>Lagos</p>
          </ContactCardDetails>
          <ContactCardDetails color={fontColorOne} colorTwo={fontColorTwo}>
            <p>Street</p>
            <p>Isolo</p>
          </ContactCardDetails> */}
        </>
      ))}
    </ContactCardWrapper>
  );
};

export default ContactCard;
