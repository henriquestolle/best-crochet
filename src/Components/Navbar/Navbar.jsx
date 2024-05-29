import React from "react";
import "./Navbar.css";
import logo_best_crochet from "../Assets/logo-best-crochet.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo_best_crochet} alt="Logo" />
      <div className="search">
        <input type="search" name="search" id="search" />
      </div>
    </div>
  );
};

export default Navbar;
