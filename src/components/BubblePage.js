import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from '../helpers/axiosWithAuth'

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('/api/colors/')
    .then(res => {
      setColorList(res.data)
    })
    .catch(err => {
      console.error(`There was a problem with the Bubble GET request: ${err.message}`)
    })
  },[])

  return (
    <div className="container">
      <ColorList 
      colors={colorList} 
      updateColors={setColorList} 
      />
      <Bubbles 
      colors={colorList} 
      />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
