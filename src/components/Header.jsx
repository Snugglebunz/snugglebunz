import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import { ReactComponent as BigS } from "../assets/S.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Snugglebunz Logo" className="logo" />

      <h1 className="title">
        <BigS className="bigSLogo" aria-label="S" />
        <span className="restText">nugglebunz</span>
      </h1>
    </header>
  );
}

export default Header;