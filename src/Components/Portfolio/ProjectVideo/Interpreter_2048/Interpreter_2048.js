import React from "react";
import ReactPlayer from "react-player";

import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";

const Interpreter_2048 = (props) => {
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
            url="https://www.youtube.com/watch?v=BxxGenG3CRI"
          />
          <div className="project-techs">
            <div className="project-techs-header">
              <p>Technologies Used</p>
            </div>
            <div className="project-techs-content">
              <div className="project-techs-content-row1">
                <p>C </p>
                <p>C++ </p>
                <p>Regex </p>
              </div>
              <div className="project-techs-content-row3">
                <p>Yacc </p>
                <p>Lex </p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-content">
          <p>
            Used Lex File to Parse the Commands from Terminal and the
            information from the parsed RegEx is passed to Yacc File which then
            maps the valid Commands to Function of C++ File for execution.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Interpreter_2048;
