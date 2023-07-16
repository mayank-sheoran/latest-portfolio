import React, { useState } from "react";
import "./Homepage.css";
import VideoPlayer from "../ProjectVideo/ProjectVideo";
import Popup from "../Popup/Popup";
// Local Imports

import profileIMG from "../images/profileIMG.png";

// Material UI Imports

const Homepage = () => {
  const [showImg, setShowImg] = useState(true);
  const [project, setProject] = useState(null);
  const [aboutMe, setAboutMe] = useState(false);
  const [skills, setSkills] = useState(false);
  return (
    <div className="homepage-outer-container">
      {aboutMe && (
        <Popup type={"about"} setAboutMe={setAboutMe} setSkills={setSkills} />
      )}
      {skills && (
        <Popup type={"skills"} setAboutMe={setAboutMe} setSkills={setSkills} />
      )}
      <div className="homepage-main-container">
        <div className="homepage-main-left-container">
          <div className="homepage-logo-outer">
            <div className="homepage-logo">MS</div>
          </div>
          <div className="homepage-intro-section">
            <div className="homepage-intro-section-header">
              <h5>INTRO</h5>
              <p>
                Hi, I'm <span style={{ color: "#FBBC04" }}>Mayank</span>, a Web
                Developer and Competitive Coder.
              </p>
              <h6>
                <span style={{ color: "#FBBC04" }}>BITS PILANI</span> | Computer
                Science | <span style={{ fontSize: "12px" }}>2018-2022</span>
              </h6>
            </div>
            <div className="homepage-intro-section-buttons">
              <button
                class="homepage-intro-section-btn"
                onClick={(e) => setAboutMe(true)}>
                <span class="circle">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">About Me</span>
              </button>
              <div class="homepage-download-skill-button">
                <div className="homepage-download-btn">
                  {/* eslint-disable-next-line */}
                  <a
                    href="https://drive.google.com/file/d/1A0YsLtfQMes0wD-uTj0xjmBAIRobVUR5/view"
                    className="btn-flip"
                    data-back="Download"
                    target="_blank"
                    data-front="Resume"></a>
                </div>
                <div className="homepage-download-btn">
                  {/* eslint-disable-next-line */}
                  <a
                    onClick={(e) => setSkills(true)}
                    href="#"
                    className="btn-flip"
                    data-back="Show"
                    data-front="Skills"></a>
                </div>
              </div>
            </div>
            <div className="homepage-connect-section">
              <p>Elsewhere</p>
              <div className="homepage-connect-icons">
                {/* eslint-disable-next-line */}
                <a href="https://wa.me/+918950577400" target="_blank">
                  <img
                    src="https://img.icons8.com/material-rounded/48/26e07f/whatsapp--v1.png"
                    alt="whatsapp"
                  />
                </a>
                {/* eslint-disable-next-line */}
                <a href="mailto:m1y1nksheor1n@gmail.com" target="_blank">
                  <img
                    src="https://img.icons8.com/color/48/000000/gmail-new.png"
                    alt="gmail"
                  />
                </a>

                {/* eslint-disable-next-line */}
                <a
                  href="https://www.linkedin.com/in/mayank-sheoran"
                  target="_blank">
                  <img
                    src="https://img.icons8.com/ios-filled/48/4a90e2/linkedin.png"
                    alt="linkedin"
                  />
                </a>

                {/* eslint-disable-next-line */}
                <a href="https://github.com/mayank-sheoran" target="_blank">
                  <img
                    src="https://img.icons8.com/material-outlined/48/ffffff/github.png"
                    alt="github"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-main-right-container">
          {showImg && <img src={profileIMG} alt="profile img" />}
          <VideoPlayer project={project} setProject={setProject} />
          <div className="homepage-project-panel">
            <p>My Work</p>
            <div className="homepage-projects-container">
              <div
                className="homepage-project-container"
                onClick={() => setProject("HFT")}>
                <h3>HFT <span style={{ fontSize: "15px" }}>algo trading</span></h3>
              </div>
              <div className="homepage-project-breakline"></div>
              <div
                className="homepage-project-container"
                onClick={() => setProject("Analyst View")}>
                <h3>Analyst View</h3>
              </div>
              <div className="homepage-project-breakline"></div>
              <div
                className="homepage-project-container"
                onClick={() => setProject("Onli Stonk")}>
                <h3>Onli Stonk</h3>
              </div>
              <div className="homepage-project-breakline"></div>
              <div
                className="homepage-project-container"
                onClick={() => setProject("Code Share")}>
                <h3>
                  p.ip.fi <span style={{ fontSize: "15px" }}>VSCode</span>
                </h3>
              </div>
              <div className="homepage-project-breakline"></div>
              <div
                className="homepage-project-container"
                onClick={() => setProject("2048 Intrepreter")}>
                <h3>
                  2048 <span style={{ fontSize: "15px" }}>Interpreter</span>
                </h3>
              </div>
              <div className="homepage-project-breakline"></div>
              <div
                className="homepage-project-container"
                onClick={() => setProject("2048 Game")}>
                <h3>2048 Game</h3>
              </div>
              <div className="homepage-project-breakline"></div>

              {/* <div
              className="homepage-project-container"
              onClick={() => setProject("Youtube-Lite")}>
              <h3>
                Basic <span style={{ fontSize: "15px" }}>Youtube</span>
              </h3>
            </div>
            <div className="homepage-project-breakline"></div>
            <div
              className="homepage-project-container"
              onClick={() => setProject("Google-Images-Lite")}>
              <h3>
                Basic <span style={{ fontSize: "15px" }}>Google Images</span>
              </h3>
            </div>
            <div className="homepage-project-breakline"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
