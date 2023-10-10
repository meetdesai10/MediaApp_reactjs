import React from "react";
import "./NavBar.scss";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
export default function NavBar() {
  return (
    <div className="topbar">
      <div className="topBarWrapper">
        <div className="leftPart">
          <h2 className="logo">LamaSocial</h2>
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
              <Chat/>
              <span className="counter">1</span>
            </div>
            <div className="icon">
              <Notifications/>
              <span className="counter">1</span>
            </div>
          </div>
          <div className="ProfilePicture">
            <img src="./public/ProfilePicture/profilePicture.avif  " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
