import React from "react";
import Styled from "styled-components";
import Axios from './componants/Axios.js'

import "./App.css";

const StyledDiv = Styled.div`
  background: purple;
  padding: 10%;
  `;

const StyleHeading = Styled.h1`
 color: gold`

 const WrapperDiv = Styled.div`
 Border: 2px solid black
 ;
 
`;

function App() {

  




  return (
    <WrapperDiv>
      <StyledDiv className="App">
        <StyleHeading> [The National Aeronautics and Space Administration]</StyleHeading>

        <Axios/>
      
      

      </StyledDiv>
    </WrapperDiv>
  );
}

export default App;
