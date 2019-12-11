import React, { useState, useEffect } from "react";
import axios from "axios";
import Body from './Body.js'

export default function Header() {
    const [pics, setPics] = useState([]);

    useEffect(() => {
        axios
          .get("https://api.nasa.gov/planetary/apod?api_key=z9CDhh4xwlA0vHN4inwqQ7eTjMVGaDttZb4guLQf")
          
          .then(response => {
            console.log(response.data);
            setPics(response.data);
          })
        },[])
        
        return <Body data = {pics}/>

    }

  