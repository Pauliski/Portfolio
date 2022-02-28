import React from "react";
import Underline from "../underline/Underline";
import { LocationDetails, LocationDetailsWrapper, LocationWrapper } from "./style";

const Location = () => {
  return (
    <LocationWrapper>
    <LocationDetailsWrapper>
      <LocationDetails>
        <p>Residence:</p>
        <p>Nigeria</p>
      </LocationDetails>
      <LocationDetails>
        <p>City</p>
        <p>Lagos</p>
      </LocationDetails>
      <LocationDetails>
        <p>Age</p>
        <p>30</p>
      </LocationDetails>
     
    </LocationDetailsWrapper>
    <Underline />
    </LocationWrapper>
    
  );
};

export default Location;
