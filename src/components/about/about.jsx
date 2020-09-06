import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
import "./teamBox.scss";
// Components
import TeamBox from "./teamBox";
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
import Person01 from "../../assets/about/person01.png";
import Person02 from "../../assets/about/person02.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="about." />
      <Row>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person01} name="Education" job="Web designer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox name="Experience" job="Graphic Designer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox name="Hobbies" job="Web designer" />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
