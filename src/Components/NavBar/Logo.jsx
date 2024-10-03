import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./../../vid_img/logo.png"
const Logo = () => {
  return (
    <div className="logoContainer">
      <Link to={"/"} >
        <img
          src={logo}
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
