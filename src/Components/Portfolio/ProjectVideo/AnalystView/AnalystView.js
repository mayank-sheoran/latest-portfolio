import React from "react";
import ReactPlayer from "react-player";
import "./AnalystView.css";

import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";

const AnalystView = (props) => {
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
            url="https://youtu.be/3Bs5qUh1d4I"
          />
          <div className="project-techs">
            <div className="project-techs-header">
              <p>Technologies Used</p>
            </div>
            <div className="project-techs-content">
              <div className="project-techs-content-row1">
                <p>React Native </p>
                <p>Node.JS </p>
                <p>Mongo DB </p>
              </div>
              <div className="project-techs-content-row2">
                <p>Firebase Auth </p>
                <p>Express </p>
              </div>
              <div className="project-techs-content-row3">
                <p>Firebase Storage </p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-content">
          <p>
            An app to maintain/analyse the trading journal, user can input basic
            information regarding the trade, and properly analyse the
            strategies/trades by applying various filters.
          </p>
          <br />
          <p>
            <span style={{ color: "#fbbc04" }}>Features</span>:- Supports
            IOS/Android, OTP login, Strategy analysis, Trades analysis, Add
            trade info with minimal effort, User friendly UI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalystView;
