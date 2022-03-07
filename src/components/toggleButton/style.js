import styled from "styled-components";

export const ToggleButtonWrapper = styled.label`
position: relative;
display: none;
@media only screen and (min-width: 768px) {
   display: block;
  }
`
export const ToggleButtonCheckbox = styled.input`
position: absolute;
left: -9999px;
top: -9999px;
&:checked + span{
background-color: blue;
&:before{
    left: 27px
}
}
`
export const ToggleButtonSlider = styled.span`
display: flex;
cursor: pointer;
width: 50px;
height: 25px;
border-radius: 100px;
background-color: #bfbfbf;
position: relative;
transition: background-color 0.2s;
&::before{
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    border-radius: 21px;
    transition: 0.2s;
    background-color: #fff;
}
`