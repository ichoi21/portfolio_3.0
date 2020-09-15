import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contact.scss";
import Title from "../ui-components/title/title";
import logo_il from "../img/logo_li.png";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Contact = () => {
  return (
    <div id="contact">
      <div className="wrapper">
        <Title title="let's connect." />
        <p className="font16">
          If you're interested in connecting with ian, below are links where you
          can go to reach ian.
        </p>
        <Row className="mt-2">
          <Col xs={12}>
            <Row center="xs">
              <Col xs={12} lg={1} className="contactS">
                <a
                  className=""
                  href="https://www.linkedin.com/in/ichoi21/"
                  target="blank"
                  alt="Linkedin"
                >
                  <LinkedInIcon color="action" style={{ fontSize: 90 }} />
                  {/* <i className="fab fa-linkedin-in fa-5x" color="secondary"></i> */}
                </a>
              </Col>
              <Col xs={12} lg={1} className="contactS">
                <a className="" href="https://www.illiest.com" target="blank">
                  <img src={logo_il} alt="illiest" />
                </a>
              </Col>
              <Col xs={12} lg={1} className="contactS">
                <a
                  className=""
                  href="https://github.com/ichoi21"
                  target="blank"
                >
                  <GitHubIcon color="action" style={{ fontSize: 80 }} />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
