import React from "react";
import "./Hero.css"
import Card from "../Card/Card"
import FB from "../../Assets/FB.png"
import GL from "../../Assets/GOOGL.png"
import AZ from "../../Assets/AMZN.svg"

function Hero() {
  return (
    <div className="hero">
      <Card
        title="Facebook"
        image={FB}
        price="266 USD"
      />
      <Card
      title="Google"
      image={GL}
      price="255 USD"
    />
    <Card
      title="Amazon"
      image={AZ}
      price="245 USD"
    />
    </div>
  );
}

export default Hero;