import React from "react";
import "./Feed.scss";
import Share from "../share/Share.jsx"
import Post from "../post/post";
import { userPostData } from "../../UserData";
export default function Feed() {
  return (
    <div className="feed">
      <Share/>
      {
        userPostData.map((item)=>{
          return <Post key={item.id} users={item}/>
        })
      }
    </div>
  );
}
