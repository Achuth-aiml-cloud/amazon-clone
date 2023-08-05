import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RoomIcon from '@mui/icons-material/Room';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function Navbar() {
  return (
    <div className="navbar">
      <img
        className="navbar_logo"
        src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
        alt="amazon logo"
      />
      <div className="navbar_end">
        <LocationOnOutlinedIcon style={{color:'white' , marginTop:'10px'}}/>
        <div className="navbar_option" style={{marginLeft:'1px'}}>
          <span className="navbar_line_1">Hello</span>
          <span className="navbar_line_2">Select Your Address</span>
        </div>
      </div>
      <div className="navbar_search">
        <input className="navbar_searchInput" type="text" value="Search Amazon.in"/>
        <SearchIcon className="navbar_searchIcon" />
      </div>
      <div className="navbar_end">
        <div className="navbar_option1" id="navbar_language">
          <span className="navbar_line_1_">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png"
              alt="IN"
              height="20"
              width="22"
            />
          </span>
          <span
            className="navbar_line_2_"
            style={{ fontSize: "14px", fontWeight: "bold" }}
          >
            EN
          </span>
        </div>
        <div className="navbar_option">
          <span className="navbar_line_1">Hello, Guest</span>
          <span className="navbar_line_2">Sign In</span>
        </div>
        <div className="navbar_option">
          <span className="navbar_line_1">Returns</span>
          <span className="navbar_line_2">& Orders</span>
        </div>
        <div className="cart">
          <ShoppingCartOutlinedIcon />
          <span className="nvabar_line_2 cartCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
