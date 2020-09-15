import React from "react";
import { Row, Col } from "react-flexbox-grid";
//SCSS
import "./about.scss";

// Components
import Title from "../ui-components/title/title";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="about." />
      <Row>
        <Col md={12} lg={4}>
          <div className="team_box flex-center">
            <p className="font11 weight500">
              I am a degreed Mechanical Engineer with a Economics minor. I spent
              time between Cal Poly San Luis Obispo and San Jose State
              University where both schools provided my fundamentals and applied
              the motto of "learn by doing" to prove out theoretical concepts.
              <br></br>
              Because I am eager to achieve more in life, I went on to take two
              (2) programs at UC Berkeley Extension - HVAC Certification and the
              Full Stack Coding Bootcamp.
            </p>
            <br></br>
            <br></br>
            <div className="team_box-info">
              <p className="font15 weight800">Education</p>
            </div>
          </div>
        </Col>
        <Col md={12} lg={4}>
          <div className="team_box flex-center">
            <p className="font11 weight500">
              I started out working for PCJPB learning to understand Project
              Controls. <br></br>I moved on to Bloom Energy as a Strategic
              Operations Project Engineer whom helped vision, analyzed, and
              start up various manufacturing plants internationally.<br></br>
              This led me back to my emphasis on HVAC (and plumbing). Currently,
              I am in an in-house engineer and project manager overseeing
              multi-disciplinary design-build projects at Cal Pacific Systems.
            </p>
            <div className="team_box-info">
              <p className="font15 weight800">Experience</p>
            </div>
          </div>
        </Col>
        <Col md={12} lg={4}>
          <div className="team_box flex-center">
            <p className="font12 weight500">
              When my mind turns off, I enjoy my time with my family, napping,
              watching basketball, or reading up on cars and minimalist styles.
              <br></br>
              When there's room for more play, I enjoy traveling to venture off
              to find local ethnic street food all over the world!
            </p>
            <div className="team_box-info">
              <p className="font15 weight800">Hobbies</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
