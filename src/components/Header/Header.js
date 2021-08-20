import React from "react";
import TwitterLogo from "../../assest/img/twitter-logo.png";

import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <img src={TwitterLogo} alt="Tweets Simulator"></img>
      <h1>Tweets Simulator Without Trump</h1>
    </div>
  );
}
