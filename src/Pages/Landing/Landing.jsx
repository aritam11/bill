import React, { useEffect } from "react";
import axios from "axios"
import Hero from "../../Components/Hero/Hero";
import Nav from "../../Components/Nav/nav";
import "./Landing.css"


function Landing() {

useEffect(()=>{

  async function getData(){
    const res = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${srch.value}&apikey=KCNI1Q33U5SH2BB2`)
  }  
})


  return (
    <div className="Container">
      <Nav/>
      <Hero/>

    </div>
  );
}

export default Landing;
