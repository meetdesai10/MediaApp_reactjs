import React, { useState } from "react";
import "./Post.scss";
import { UserData } from "../../UserData";
export default function Post({ users }) {
  let [likeCounter, setlikeCounter] = useState(users.like);
  let [islike, setIsLike] = useState(true);
  function updatelikeHandler() {
    setlikeCounter(islike ? ++likeCounter : --likeCounter);
    setIsLike(!islike);
  }
  return (
    <div className="post">
      <div className="userInfo">
        <img
          src={UserData.filter((item) => item.id == users.id)[0].profilePicture}
          alt=""
          className="userProfilePicture"
        />
        <span className="userName">
          {UserData.filter((item) => item.id == users.id)[0].userName}
        </span>
        <span className="uploadTime">{users.date}</span>
      </div>
      <div className="userPost">
        <img src={users.photo} alt="" className="postImages" />
        <div className="postIcons">
          <div className="iconsLeft">
            <svg
              onClick={updatelikeHandler}
              className="likeIcon"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill={islike ? "white" : "blue"}
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
            <span className="likeCounter">
              {likeCounter}
              <span
                style={{ fontSize: "16px", color: "grey", marginLeft: "5px" }}
              >
                People liked it
              </span>
            </span>
          </div>
          <div className="commentSection">
            <div className="commentCounter">{users.comment}</div>
            <span>Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
