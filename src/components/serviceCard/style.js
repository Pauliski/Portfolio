import styled from "styled-components";

export const ServiceCardWrapper = styled.div`
  background-color: #2c2c38;
  background-color: ${props=>props.backgroundColor};
  width: 100%;
  padding: 1.25rem;
  max-height: 240px;
  /* border: 1px solid #fff; */
  margin-bottom: 1.25rem;
  @media only screen and (min-width: 1030px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 48%;
  }
  @media only screen and (min-width: 1300px) {
    width: 33%;
  }
`;
export const ServiceCardHeader = styled.p`
  color: #ffffff;
  color: ${props=>props.color};
  font-size: 25px;
  margin-bottom: 0.625rem;
`;
export const ServiceCardBody = styled.p`
  color: #67676c;
  margin-bottom: 0.625rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const ServiceCardButton = styled.button`
  color: #ffc107;
  color: ${props=>props.color};
  padding: 10px 0;
`;
