import styled from "styled-components";

export const ContactCardWrapper = styled.div`
background-color: #2c2c38;
padding: 2.5rem 1.25rem;
margin-bottom: 1.25rem;
`
export const ContactCardDetails = styled.div`
display: flex;
justify-content: space-between;
line-height: 1.5;
& > p:nth-child(1){
    color: #FFFFFF;
}
& > p:nth-child(2){
    color: #67676c;
}
`