import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { contacts } from "../../staticData";
import ContactCard from "../contactCard/ContactCard";
import { ContactSessionTitle, ContactWrapper } from "./style";

const Contact = () => {
  const { cardColor, fontColorOne, fontColorTwo } = useContext(ThemeContext);
  return (
    <>
      <ContactSessionTitle color={fontColorOne}>
        Contact information
      </ContactSessionTitle>
      <ContactWrapper>
        {contacts.map((item, i) => (
          <ContactCard data={item} key={i} />
        ))}
      </ContactWrapper>
    </>
  );
};

export default Contact;
