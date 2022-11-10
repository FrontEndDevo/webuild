import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SingleLink = (props) => {
  return (
    <li className="my-2">
      <FontAwesomeIcon icon={props.icon} className="mr-2" />
      {props.link}
    </li>
  );
};

export default SingleLink;
