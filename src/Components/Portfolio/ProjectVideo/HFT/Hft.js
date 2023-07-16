import React from "react";
import ReactPlayer from "react-player";
import "./Hft.css";
import drawdownGraph from './drawdown-graph.png'

import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";

const Hft = (props) => {
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
            url="https://youtu.be/zI_JON5YBQ8"
          />
          <div className="project-techs">
            <div className="project-techs-header">
              <p>Technologies Used</p>
            </div>
            <div className="project-techs-content">
              <div className="project-techs-content-row1">
                <p>Python</p>
                <p>Typescript</p>
                <p>Mongo DB </p>
              </div>
              <div className="project-techs-content-row2">
                <p>Jest (Testing) </p>
                <p>Node.js </p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-content">
          <p>
            It is a high frequency trading algorithm, which take trades in indian stock exchange, specifically in index FNO contracts.
          </p>
          <br />
          <div className="backtesting-results">
            <div className="backtesting-results-left">
              <p>
                <span style={{ color: "#fbbc04" }}>Backtesting results</span>
              </p>
              <p>2018 - <span style={{ color: "#ed1f1f" }}>-27% ROI</span></p>
              <p>2019 - <span style={{ color: "#78ed1f" }}>+103% ROI</span></p>
              <p>2020 - <span style={{ color: "#78ed1f" }}>+300% ROI</span></p>
              <p>2021 - <span style={{ color: "#78ed1f" }}>+143% ROI</span></p>
              <p>2022 - <span style={{ color: "#ed1f1f" }}>-105% ROI</span></p>
              <p>2023 (uptil July) - <span style={{ color: "#78ed1f" }}>+35% ROI</span></p>
            </div>
            <div className="backtesting-result-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hft;
