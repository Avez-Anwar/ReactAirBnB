import React from "react";
import Airbnb from "./airbnb_image.png";
import "./Header.css";
import LanguageIcon from "@material-ui/icons/Language";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

function Header() {
  const mystyle = {
    color: "#ff7989",
    fontSize: "25px",
    padding: "10px",
    fontWeight: "600",
    textDecoration: "none",
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header_icon" src={Airbnb} alt="airbnbImage" />
      </Link>
      <Link to="/search" style={{ textDecoration: "none" }}>
        <div className="allProperites">All Properites</div>
      </Link>
      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div>
        <DropDown />
      </div>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <div className="contactUs">Contact Us</div>
      </Link>
      <Link to="/pagination" style={mystyle}>
        <div className="Pagination">Pagination</div>
      </Link>

      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default Header;
