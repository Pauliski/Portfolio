import styled from "styled-components";

export const ContactCardWrapper = styled.div`
  background-color: #2c2c38;
  background-color: ${(props) => props.backgroundColor};
  padding: 2.5rem 1.25rem;
  margin-bottom: 1.25rem;
  max-height: 220px;
  margin-bottom: 1.25rem;
  width: 100%;
  @media only screen and (min-width: 1030px) {
    width: 48%;
  }
  @media only screen and (min-width: 1300px) {
    width: 33%;
  }
`;
export const ContactCardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.5;
  & > p:nth-child(1) {
    color: #ffffff;
    color: ${(props) => props.color};
  }
  & > p:nth-child(2) {
    color: #67676c;
    color: ${(props) => props.colorTwo};
  }
`;
