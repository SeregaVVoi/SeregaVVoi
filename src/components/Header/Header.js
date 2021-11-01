import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/UKAD_logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <div className="Header">
      <img src={logo} className="Header__Logo" />
      <Link to="/" className="Header__Link">
        Home
      </Link>
      <Link to="/products" className="Header__Link">
        Products
      </Link>
    </div>
  );
};
