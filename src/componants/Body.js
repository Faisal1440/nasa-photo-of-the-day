import React from "react";

export default function Body(props) {
console.log (props.data)
    
        return (<div>
            <h1>Daily Picture</h1>
            <img src= {props.data.url} alt="Smiley face" height="500" width="500"/>
         <h3>{props.data.explanation}</h3>
         </div>
        )

      





}