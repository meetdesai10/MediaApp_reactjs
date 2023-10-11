import React from "react";
import "./RightBar.scss";
import Online from "../onlineFriend/Online";
import { UserData, userPostData } from "../../UserData";
export default function RightBar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="brithInfo">
          <img src="./public/gift/gift.png" alt="" className="gitIcon" />
          <span>
            <b>meetdesai_10</b> and <b>3 other friends</b> have a brithday
            today.
          </span>
        </div>
        <div className="ADInfo">
          <img src="./public/advertise/coffeeAD.avif" className="AD" alt="" />
        </div>
        {UserData.map((item) => {
          return <Online key={item.id} user={item} />;
        })}
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">Gujrat</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">Surat</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship</span>
            <span className="rightBarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              src="./public/post/image6.avif"
              alt=""
              className="rightBarFollowingsImg"
            />
            <span className="rightBarFollowingsName">Meet desai</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="./public/post/image5.avif"
              alt=""
              className="rightBarFollowingsImg"
            />
            <span className="rightBarFollowingsName">Arjun Baldha</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="./public/post/image4.avif"
              alt=""
              className="rightBarFollowingsImg"
            />
            <span className="rightBarFollowingsName">harsh Patel</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="./public/post/image3.avif"
              alt=""
              className="rightBarFollowingsImg"
            />
            <span className="rightBarFollowingsName">Darshan Tejani</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="./public/post/image2.avif"
              alt=""
              className="rightBarFollowingsImg"
            />
            <span className="rightBarFollowingsName">kashyap patel</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="./public/post/image1.avif"
              alt=""
              className="rightBarFollowingsImg"
            />
            <span className="rightBarFollowingsName">Gaurang Vasani</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightBar">
      {profile ? <ProfileRightBar /> : <HomeRightBar />}
    </div>
  );
}
