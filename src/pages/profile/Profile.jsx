import React from "react";
import "./Profile.scss";
import NavBar from "../../component/navbar/NavBar";
import SideBar from "../../component/sidebar/SideBar";
import Feed from "../../component/feed/Feed";
import RightBar from "../../component/rightbar/RightBar";
export default function Profile() {
  return (
    <>
      <NavBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="./public/post/image5.avif"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="./public/post/image4.avif"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Meet desai</h4>
              <span className="profileInfoDesc">Hello my friend!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}
