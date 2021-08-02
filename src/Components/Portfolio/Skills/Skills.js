import React from "react";
import "./Skills.css";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
const Skills = (props) => {
  return (
    <div className="skills-container">
      <div className="skills-header">
        <h3>Skills</h3>
        <CancelRoundedIcon
          onClick={(e) => props.setSkills(false)}
          style={{
            color: "red",
            fontSize: "40px",
            cursor: "pointer",
          }}
        />
      </div>
      <div className="skills-content">
        <div className="skills-content-row1">
          <p>Python</p>
          <p>C++</p>
          <p>C</p>
          <p>Javascript</p>
          <p>MySQL</p>
        </div>
        <div className="skills-content-row2">
          <p>React.JS</p>
          <p>Redux</p>
          <p>MongoDB</p>
          <p>Express</p>
          <p>Node.JS</p>
        </div>
        <div className="skills-content-row3">
          <p>Competitive Coding</p>
          <p>Data Structures</p>
          <p>OOP</p>
        </div>
        <div className="skills-content-row1">
          <p>DBMS</p>
          <p>Operating Systems</p>
          <p>Computer Networks</p>
        </div>
        <div className="skills-content-row2">
          <p>Artificial Intellegence</p>
          <p>Graph Theory</p>
          <p>Compilers</p>
        </div>
        <div className="skills-content-row3">
          <p>GIT</p>
          <p>Neural Networks</p>
          <p>Linux</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
