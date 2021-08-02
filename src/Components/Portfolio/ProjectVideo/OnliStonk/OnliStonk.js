import React from "react";
import ReactPlayer from "react-player";
import "./OnliStonk.css";

import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";

const OnliStonk = (props) => {
  const handleClose = () => {
    props.setProject(null);
  };
  return (
    <div className="video-container">
      <div className="project-description">
        <div className="project-desc-header">
          <p>{props.project}</p>
        </div>
        <div className="project-video">
          <ReactPlayer
            className="react-player"
            width="35vw"
            // height="500px"
            url="https://youtu.be/oe9pQnE3VWU"
          />
          <div className="project-techs">
            <div className="project-techs-header">
              <p>Technologies Used</p>
            </div>
            <div className="project-techs-content">
              <div className="project-techs-content-row1">
                <p>React.JS </p>
                <p>Node.JS </p>
                <p>Mongo DB </p>
              </div>
              <div className="project-techs-content-row2">
                <p>Socket.IO </p>
                <p>Express </p>
              </div>
              <div className="project-techs-content-row3">
                <p>React Router </p>
                <p>Cloudinary </p>
                <p>Browser Cache </p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-content">
          <p>
            OnliStonk will help you to Learn / Manage your investments such as
            Stocks and Real Estate. Users can Add / Access all Books and Youtube
            videos that other users have posted, Manage the Personal Stock-Watch
            List along with Real Estate Properties, Communicate in a Real-Time
            Live chat room.
          </p>
          <br />
          <p>
            <span style={{ color: "#fbbc04" }}>Features</span>:- User Login,
            Personal Portfolio Section, Real-Time Live Chat Room, Interactive
            Learning, and News Section.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnliStonk;
