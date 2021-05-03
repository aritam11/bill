import React from "react";
import "./nav.css"
import QA from "../../Assets/Quickie.png"

function Nav() {
  return (
    <div className="nav">
      <img className="qlogo" src={QA} alt="logo"/>
    </div>
  );
}

export default Nav;
