import styled from "styled-components";

export const LocationWrapper = styled.div`
  /* padding: 1.25rem 0; */
  padding-bottom: 0;
`;
export const LocationDetailsWrapper = styled.div`
  margin-bottom: 1.25rem;
`;
export const LocationDetails = styled.div`
  display: flex;
  justify-content: space-between;
  & > p :nth-child(1) {
    color: #ffffff;
  }
  & > p :nth-child(2) {
    color: #77777a;
  }
`;

