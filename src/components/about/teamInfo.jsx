import React from "react";
// SCSS
import "./teamInfo.scss";

const about = (props) => (
  <div className="team__info flex-center">
    <div>
      <h4 className="font20 weight800">Little About Us</h4>
      <p className="font12 weight500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        temp orincididunt ut labore et dolore magna aliqua.
      </p>
      <p className="font12 weight500">Read More</p>
      <div className="team__box-info">
        <p className="font15 weight800">{props.name}</p>
        <p className="font12 weight500">{props.job}</p>
      </div>
    </div>
  </div>
);

export default about;
