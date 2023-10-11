import React from "react";
import "./Share.scss";
import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="./public/ProfilePicture/profilePicture.avif"
            alt=""
            className="sharePrfileImg"
          />
          <input
            className="shareInput"
            placeholder="What's in your mind meet?"
            name=""
            id=""
          />
        </div>
        <hr className="HRline" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareOptionIcon" />
              <span className="shareOptionText">Photo or video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareOptionIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareOptionIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareOptionIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
            <button className="sharebtn">share</button>
          </div>
        </div>
      </div>
    </div>
  );
}
