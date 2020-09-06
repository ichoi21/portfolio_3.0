import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
import HeroImage from "../img/iC_Avatar.png";
import Button from "../ui-components/button/button";

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={8}>
          <div className="hero-info">
            <h1 className="weight800 font60">IAN CHOI</h1>
            <p className="font8">
              I am a Mechanical Engineer currently in the construction industry
              working at a MEP contractor as a Director/Sr Project Manager
              overseeing the HVAC dept while tackling both mechanical and
              plumbing projects in both the public and private sectors.
              <br></br>I strive to better myself. So I've taken on a part-time
              full stack boot-camp program at UC Berkeley Extension to better
              understand coding in effort to find ways to expand alternate
              methods to maximize efficiencies in the construction industry.
              Coding development is an untapped area where subcontractors lack
              technology not yet fully exposed to the industry could be a
              potential game-changer on scaling, flexing, and adaptable
              operational capabilities.
            </p>
            <Button className="button" label="CONNECT" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={4}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
