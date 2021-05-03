import React from "react";
import "./Card.css"

function Card(props) {
  return (
    <div className="card">
        <div className="top">
            <p className="title">{props.title}</p>
            <img className="clogo" src={props.image} alt="company"></img>
        </div>
        <div className="bottom">
            <h2 className="price">{props.price}</h2>
        </div>
    </div>
  );
}

export default Card;
