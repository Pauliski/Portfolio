import styled from "styled-components";

export const FooterWrapper = styled.footer`
position: absolute;

bottom: 0;
left: 0;
height: 2.5rem;
width: 100%;
background-color:  #24242f;
`
export const FooterIconContainer =  styled.div`
position: relative;
display: flex;
align-items: center;
padding: 0 1.875rem;
height: 100%;
justify-content: space-around;
& svg{
    width: 20px;
    height: 20px;
    fill: #87878A;
    ;

}
`