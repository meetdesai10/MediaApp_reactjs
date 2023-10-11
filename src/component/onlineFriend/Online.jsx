import React from "react";
import "./Online.scss";
export default function Online({ user }) {
  return (
    <div className="online">
      <ul className="onlineFriend">
        <li className="onlineFriendlist">
          <img src={user.profilePicture} alt="" className="onlineFriendImg" />
          <span className="greenIndicator"></span>
          <span className="onlineFriendName">{user.userName}</span>
        </li>
      </ul>
    </div>
  );
}
