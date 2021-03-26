import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from '../helpers/axiosWithAuth'

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .get('/colors')
    .then(res => {
      setColorList(res.data)
    })
    .catch(err => {
      console.error(`There was a problem with the Bubble GET request: ${err.message}`)
    })
  },[])
  // This may or may not work. After spending hours on this, after 5 restarts of npm start the token finally stopped erroring and began to fetch. I have never seen this error before and it may come up again
  // At least to me, this doesn't seem to be an issue that my code is causing. It may be the server. EITHER WAY, done. 

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
