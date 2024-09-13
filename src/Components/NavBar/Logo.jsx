import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="logoContainer">
      <Link to={"/"} >
        <img
          src="https://goodwayattestation.com/images/images-logo.png"
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
