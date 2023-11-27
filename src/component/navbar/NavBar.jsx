import React from "react";
import "./NavBar.scss";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="topbar">
      <div className="topBarWrapper">
        <div className="leftPart">
          <Link style={{textDecoration:"none"}} to={"/"}>
            <h2 className="logo">LamaSocial</h2>
          </Link>
        </div>
        <div className="centerPart">
          <div className="search">
            <Search className="searchIcon" />
            <input
              placeholder="Search for friend,post or video"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="rightPart">
          <div className="info">
            <span>HomeLine</span>
            <span>TimeLine</span>
          </div>
          <div className="icons">
            <div className="icon">
              <Person />
              <span className="counter">1</span>
            </div>
            <div className="icon">
              <Chat />
              <span className="counter">1</span>
            </div>
            <div className="icon">
              <Notifications />
              <span className="counter">1</span>
            </div>
          </div>
          <div className="ProfilePicture">
            <Link to={"/profile"}>
              <img src="./public/ProfilePicture/profilePicture.avif  " alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
