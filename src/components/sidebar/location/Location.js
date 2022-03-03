import React, { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import Underline from "../underline/Underline";
import {
  LocationDetails,
  LocationDetailsWrapper,
  LocationWrapper,
} from "./style";

const Location = () => {
  const { fontColorOne, fontColorTwo } = useContext(ThemeContext);
  return (
    <LocationWrapper>
      <LocationDetailsWrapper>
        <LocationDetails
          fontColorOne={fontColorOne}
          fontColorTwo={fontColorTwo}
        >
          <p>Residence:</p>
          <p>Nigeria</p>
        </LocationDetails>
        <LocationDetails
        fontColorOne={fontColorOne}
        fontColorTwo={fontColorTwo}
        >
          <p>City</p>
          <p>Lagos</p>
        </LocationDetails>
        <LocationDetails
        fontColorOne={fontColorOne}
        fontColorTwo={fontColorTwo}
        >
          <p>Age</p>
          <p>30</p>
        </LocationDetails>
      </LocationDetailsWrapper>
      <Underline />
    </LocationWrapper>
  );
};

export default Location;
