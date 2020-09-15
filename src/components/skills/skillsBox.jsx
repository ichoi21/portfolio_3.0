import React from "react";
// SCSS
import "./skills.scss";

const skillsBox = (props) => (
  <div className="skills_box flex-center">
    <img src={props.skill} alt="skills" />
  </div>
);

export default skillsBox;
