import React from "react";
import "./Home.scss";
import NavBar from "../../component/navbar/NavBar";
import SideBar from "../../component/sidebar/SideBar";
import Feed from "../../component/feed/Feed";
import RightBar from "../../component/rightbar/RightBar";
export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="middlePart">
        <SideBar />
        <Feed/>
        <RightBar/>
      </div>
    </div>
  );
}
