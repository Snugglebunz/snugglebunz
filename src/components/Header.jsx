import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
        <img src={logo} alt="Snugglebunz Logo" className="logo" />
        <h1 className="title">
            <span className="bigS">S</span>nugglebunz
        </h1>    
    </header>
  );
}

export default Header;