import React from "react";
import ReactPlayer from "react-player";
// import "./CodeShare.css";

import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";

const CodeShare = (props) => {
  const handleClose = () => {
    props.setProject(null);
  };
  return (
    <div
      className={`video-container ${
        props.project !== null ? "video-container-transition" : ""
      }`}>
      <div className="project-description">
        <div className="project-desc-header">
          <p>{props.project}</p>
        </div>
        <div className="project-video">
          <ReactPlayer
            className="react-player"
            width="35vw"
            // height="500px"
            url="https://youtu.be/wWs5Np-fKWs"
          />
          <div className="project-techs">
            <div className="project-techs-header">
              <p>Technologies Used</p>
            </div>
            <div className="project-techs-content">
              <div className="project-techs-content-row1">
                <p>Type Script </p>
                <p>Open Source </p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-content">
          <p>
            VS Code extension for sharing code via p.ip.fi. The extension will
            provide a shareable link of code that can be accessed by anyone.
            Features include the Option to share the whole file or only the
            selected text.
          </p>
          <br />
          <p>
            Have over <span style={{ color: "#fbbc04" }}>411</span> Downloads on
            VSCode Marketplace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeShare;
