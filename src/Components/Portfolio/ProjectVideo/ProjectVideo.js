import React, { useState, useEffect } from "react";
import OnliStonk from "./OnliStonk/OnliStonk";
import CodeShare from "./CodeShare/CodeShare";
import Game_2048 from "./Game_2048/Game_2048";
import Interpreter_2048 from "./Interpreter_2048/Interpreter_2048";

import "./ProjectVideo.css";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
const ProjectVideo = (props) => {
  const handleClose = () => {
    props.setProject(null);
  };
  return (
    <div
      className={`project-video-container ${
        props.project !== null ? "project-video-container-transition" : ""
      }`}>
      <div className="popup-header" onClick={handleClose}>
        <KeyboardArrowDownRoundedIcon
          style={{
            fontSize: "70px",
            color: "#fbbc04",
          }}
        />
      </div>
      {props.project === "Onli Stonk" && (
        <OnliStonk project={props.project} setProject={props.setProject} />
      )}
      {props.project === "Code Share" && (
        <CodeShare project={props.project} setProject={props.setProject} />
      )}
      {props.project === "2048 Intrepreter" && (
        <Interpreter_2048
          project={props.project}
          setProject={props.setProject}
        />
      )}
      {props.project === "2048 Game" && (
        <Game_2048 project={props.project} setProject={props.setProject} />
      )}
    </div>
  );
};

export default ProjectVideo;
