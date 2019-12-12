import React from "react";
import Styled from "styled-components";
import { yellow } from "ansi-colors";



const StyledDiv = Styled.div`
background: black`;

;
 const StyleHeading = Styled.h1`
 color: pink`;
 const StyleHeading3 = Styled.h3`
 color:white`;


export default function Body(props) {
console.log (props.data);
    



        return (<StyledDiv>
        <StyleHeading>Daily Picture</                 StyleHeading>
            <img src= {props.data.url}              alt="Smiley face" height="500"        width="500"/>
            <StyleHeading3>{props.data.explanation}</StyleHeading3>
         </StyledDiv>
        )

      





}