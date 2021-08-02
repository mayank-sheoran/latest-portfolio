import React from "react";
import ReactPlayer from "react-player";
import "./Game_2048.css";

import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";

const Game_2048 = (props) => {
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
            url="https://www.youtube.com/watch?v=nQxovdVubNY"
          />
          <div className="project-techs">
            <div className="project-techs-header">
              <p>Technologies Used</p>
            </div>
            <div className="project-techs-content">
              <div className="project-techs-content-row1">
                <p>Python3 </p>
                <p>OOP </p>
                <p>GUI </p>
              </div>
              <div className="project-techs-content-row3">
                <p>Backtracking </p>
                <p>Automate</p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-content">
          <p>
            Made 2048 Game with Python using Object oriented design. User can
            execute .exe to start playing the 2048 game or can execute python
            file with target tile number, program will use backtracking
            algorithm to reach the given target tile using valid moves.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Game_2048;
