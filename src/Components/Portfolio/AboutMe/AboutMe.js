import React from "react";
import "./AboutMe.css";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import BITSLOGO from "../images/BITS_Pilani-Logo.svg.png";
const AboutMe = (props) => {
  return (
    <div className="aboutme-main-container">
      <div className="aboutme-header">
        <h3>About Me</h3>
        <CancelRoundedIcon
          onClick={(e) => props.setAboutMe(false)}
          style={{
            color: "red",
            fontSize: "40px",
            cursor: "pointer",
          }}
        />
      </div>
      <div className="aboutme-content">
        <img src={BITSLOGO} alt="bits logo" />
        <p>
          I am Mayank Sheoran, Final year student of Computer Science at{" "}
          <span>BITS PILANI</span>. I am a learning enthusiast with some
          patience, always energetic and eager to learn new skills. As of now i
          am working on my Web Development, Competitive Coding skills.{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
