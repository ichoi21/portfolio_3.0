import React from "react";
import Swiper from "./swiper";
//SCSS
import "./skills.scss";

// Components
import Title from "../ui-components/title/title";

const skills = () => (
  <div id="skills">
    <div className="wrapper">
      <Title title="skills." />
      <Swiper />
    </div>
  </div>
);

export default skills;
