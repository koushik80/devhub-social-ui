import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import WorkIcon from "@material-ui/icons/Work";
import HomeIcon from "@material-ui/icons/Home";
import Switch from "@material-ui/core/Switch";
import React from "react";

export default function Rightbar({ profile }) {

  const [state, setState] = React.useState({
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Chris Jonsson</b> and <b>4 other friends</b> have a birhday today.
          </span>
        </div>
          <img className="rightbarAd" src="assets/ad.gif" alt="" />
        <h4 className="rightbarTitle">Online Networks
        <div>
        <Switch checked={state.checkedB} onChange={handleChange} color="primary" name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }} />
        </div>        
        </h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">About</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey"><LocationCityIcon /></span>
            <span className="rightbarInfoValue">Live: Helsinki</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey"><HomeIcon /></span>
            <span className="rightbarInfoValue">From: Chittagong</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey"><WorkIcon /></span>
            <span className="rightbarInfoValue">Work: Full-stack developer</span>
          </div>
        </div>
        <h4 className="rightbarTitle">My Networks</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/12.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Oliver Smith</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/13.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/14.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Emily Anderson</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/15.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jessica Wilson</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Sara Jones</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/17.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Jonathan Rhys</span>
          </div>
 <div className="rightbarFollowing">
            <img src="assets/person/18.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Adam Clark</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/16.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Isabella Hayek</span>
          </div>


        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}