import React from "react";
import Styled from "styled-components";




export default function Body(props) {
console.log (props.data);
    


const StyledDiv = Styled.div`
background: green`;
 const StyleHeading = Styled.h1`
 color: pink`
 const styleHeading = Styled.h3`
 color:purple`


        return (<StyledDiv>
            <StyleHeading>Daily Picture</StyleHeading>
            <img src= {props.data.url} alt="Smiley face" height="500" width="500"/>
         <StyleHeading>{props.data.explanation}</StyleHeading>
         </StyledDiv>
        )

      





}