import React, { useEffect } from "react";
import Hero from "../../Components/Hero/Hero";
import Nav from "../../Components/Nav/nav";
import "./Landing.css"


function Landing() {

useEffect(()=>{

  var searchResults = [];
  // var availResults = [];
  var mcap = [];
  var cprice =[];

  fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=ba&apikey=KCNI1Q33U5SH2BB2`)
        .then(response => response.json())
        .then(data =>{
            data.bestMatches.forEach(element => {
                searchResults.push(element['1. symbol']);
            });

            return searchResults;
          })
          .then(sr =>{
            console.log(sr);
            sr.forEach(element =>{
        
              fetch(`https://cloud.iexapis.com/stable/stock/${element}/stats/marketcap?token=sk_ae48cfaa532440378d912a5dbffa1ebf`)
              .then(res =>res.json())
                    .then(da => {
                        var y={};
                        y[element] =da;
                        mcap.push(y);
                        return element;
                    })  
                    .then(ele =>{
                      fetch(`https://cloud.iexapis.com/stable/stock/${ele}/quote/latestPrice?token=sk_ae48cfaa532440378d912a5dbffa1ebf`)
                      .then(res =>res.json())
                      .then(da => {
      
                          var y={};
                          y[element] =da;
                          cprice.push(y);
      
                      })
                    });

                        
             }); 
             console.log(mcap);
             console.log(cprice);
          });
         
});
 


  return (
    <div className="Container">
      <Nav/>
      <Hero/>

    </div>
  );
}

export default Landing;
