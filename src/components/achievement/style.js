import styled from "styled-components";

export const AchievementWrapper = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding: 1.25rem 0;
width: 90%;
`
export const AchievementItems = styled.div`
display: flex;
/* align-items: center; */
flex-wrap: nowrap;

/* margin-right: 120px; */
& > p :nth-child(1) {
    color: #ffc107;
    margin-right: 1.25rem;
    font-size: 1.3rem;
    font-weight: bold;
  }
  & > p :nth-child(2) {
    color: #FFFFFF;
  }
`