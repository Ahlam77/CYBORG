import React from 'react'
import './Home.css'

import {
  
  Hero,
  MostPopular,
  GamingLibrary,
 
} from "../../sections/index.js";

const Home = () => {
  return (
    <>
     
      <Hero />
      <MostPopular />
      <GamingLibrary />
    </>
  );
}

export default Home