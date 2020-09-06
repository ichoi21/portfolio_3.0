import React from "react";

import "./teamBox.scss";
import "./teamInfo.scss";

const teamBox = (props) => (
  <div className="team__box flex-center">
    <p className="font12 weight500">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      temp orincididunt ut labore et dolore magna aliqua.
    </p>
    <div className="team__box-info">
      <p className="font15 weight800">{props.name}</p>
      <p className="font12 weight500">{props.job}</p>
    </div>
  </div>
);

export default teamBox;
