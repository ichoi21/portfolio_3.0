import React from "react";
import { Col, Row } from "react-flexbox-grid";
import { Link } from "react-scroll";

import "./footer.scss";

const partnerBox = () => (
  <div className="footer">
    <div className="wrapper">
      <Row>
        <Col xs={12} sm={6} md={6}>
          <div className="footer-box">
            <p>
              © 2020. With the help of Google, open source, + all other devs ..
              keyboard by ic
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
            <div className="footer-box back-to-top">
              <p>BACK TO TOP</p>
              <span className={{ style: "white" }}>
                <i className="fas fa-angle-double-up"></i>
              </span>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  </div>
);
export default partnerBox;
