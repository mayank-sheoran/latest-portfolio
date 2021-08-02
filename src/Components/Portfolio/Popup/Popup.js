import React from "react";
import "./Popup.css";

import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";

const Popup = (props) => {
  return (
    <div className="popup-outer-container">
      <div className="popup-container">
        {props.type === "about" && <AboutMe setAboutMe={props.setAboutMe} />}
        {props.type === "skills" && <Skills setSkills={props.setSkills} />}
      </div>
    </div>
  );
};

export default Popup;
