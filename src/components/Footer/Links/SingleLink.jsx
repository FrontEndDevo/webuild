import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SingleLink = (props) => {
  return (
    <li>
      <FontAwesomeIcon icon={props.icon} />
      {props.link}
    </li>
  );
};

export default SingleLink;
